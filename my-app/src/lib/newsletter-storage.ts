import { NEWSLETTER_DISMISS_COOLDOWN_DAYS } from "./newsletter";

/**
 * Browser-side memory for the newsletter popup: who subscribed, who dismissed
 * it, and one open channel so the footer or a nav link can summon it.
 */
const KEYS = {
  subscribed: "oc-newsletter-subscribed",
  dismissedAt: "oc-newsletter-dismissed-at",
  shownThisSession: "oc-newsletter-shown",
} as const;

export const NEWSLETTER_OPEN_EVENT = "oncode:newsletter:open";

const COOLDOWN_MS = NEWSLETTER_DISMISS_COOLDOWN_DAYS * 24 * 60 * 60 * 1000;

function readLocal(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocal(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private mode or storage disabled: the popup simply behaves session-to-session.
  }
}

function readSession(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Ignore: a missing session flag only means we may ask again.
  }
}

export function hasNewsletterSubscription(): boolean {
  return readLocal(KEYS.subscribed) === "1";
}

export function markNewsletterSubscribed(): void {
  writeLocal(KEYS.subscribed, "1");
}

export function markNewsletterPopupShown(): void {
  writeSession(KEYS.shownThisSession, "1");
}

export function recordNewsletterDismissal(): void {
  writeLocal(KEYS.dismissedAt, new Date().toISOString());
}

function isWithinCooldown(): boolean {
  const dismissedAt = readLocal(KEYS.dismissedAt);
  if (!dismissedAt) return false;
  const dismissed = Date.parse(dismissedAt);
  if (Number.isNaN(dismissed)) return false;
  return Date.now() - dismissed < COOLDOWN_MS;
}

/** Single source of truth for whether this visitor should see the popup at all. */
export function shouldShowNewsletterPopup(): boolean {
  if (typeof window === "undefined") return false;
  if (hasNewsletterSubscription()) return false;
  if (readSession(KEYS.shownThisSession) === "1") return false;
  if (isWithinCooldown()) return false;
  return true;
}

/** Fire from any surface (footer link, nav item) to open the popup. */
export function openNewsletterPopup(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(NEWSLETTER_OPEN_EVENT));
}
