"use client";

import { useCallback, useState } from "react";
import {
  newsletterSignupSchema,
  type NewsletterDesignId,
} from "@/lib/newsletter";
import { markNewsletterSubscribed } from "@/lib/newsletter-storage";
import { trackFormSubmit } from "@/lib/analytics";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseNewsletterSignupArgs {
  /** Where the form lives: popup, footer, preview. Sent to the API and analytics. */
  source: string;
  design?: NewsletterDesignId;
}

interface NewsletterSignupValues {
  email: string;
  name?: string;
}

/**
 * Submit logic shared by the popup designs and the footer form.
 * Validates on the client, posts to /api/newsletter, and exposes a small state machine.
 */
export function useNewsletterSignup({
  source,
  design,
}: UseNewsletterSignupArgs) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const subscribe = useCallback(
    async ({ email, name }: NewsletterSignupValues): Promise<boolean> => {
      setError(null);

      const parsed = newsletterSignupSchema.safeParse({ email, name, source, design });
      if (!parsed.success) {
        setError(
          parsed.error.issues[0]?.message ?? "Check your details and try again.",
        );
        setStatus("error");
        return false;
      }

      setStatus("submitting");

      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });

        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        if (!response.ok) {
          throw new Error(data?.error ?? "Something went wrong. Try again.");
        }

        markNewsletterSubscribed();
        setSubmittedEmail(parsed.data.email);
        setStatus("success");
        trackFormSubmit("newsletter_signup", {
          source,
          variant: design ?? "default",
          has_name: Boolean(parsed.data.name),
        });
        return true;
      } catch (submitError) {
        setError(
          submitError instanceof Error
            ? submitError.message
            : "Something went wrong. Try again.",
        );
        setStatus("error");
        return false;
      }
    },
    [source, design],
  );

  const clearError = useCallback(() => setError(null), []);

  return {
    status,
    error,
    submittedEmail,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
    subscribe,
    clearError,
  };
}
