import { NextResponse } from "next/server";
import { newsletterSignupSchema } from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** n8n answers as soon as it accepts the signup; this is a ceiling, not a wait for Gmail. */
const WEBHOOK_TIMEOUT_MS = 8000;

/** Best-effort in-memory throttle. Per-instance only; enough to blunt naive spam. */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;
const recentHits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recentHits.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  hits.push(now);
  recentHits.set(key, hits);
  if (recentHits.size > 5000) recentHits.clear();
  return hits.length > RATE_LIMIT_MAX;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  return ip || request.headers.get("x-real-ip") || "unknown";
}

async function forwardSignup(payload: {
  email: string;
  name?: string;
  source: string;
  design?: string;
}): Promise<boolean> {
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[newsletter] NEWSLETTER_WEBHOOK_URL is not set");
    return false;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return response.ok;
  } catch (error) {
    console.error("[newsletter] webhook forward failed", {
      email: payload.email,
      error,
    });
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = newsletterSignupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ?? "Enter a valid email address.",
      },
      { status: 400 },
    );
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in a few minutes." },
      { status: 429 },
    );
  }

  const accepted = await forwardSignup(parsed.data);
  if (!accepted) {
    return NextResponse.json(
      { error: "Couldn't save your email. Try again in a minute." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
