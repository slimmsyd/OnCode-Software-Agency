"use client";

import { type FormEvent, useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  NEWSLETTER_CADENCE,
  NEWSLETTER_SERIF_FONT,
} from "@/lib/newsletter";
import { useNewsletterSignup } from "./useNewsletterSignup";

interface NewsletterFooterFormProps {
  source?: string;
}

/**
 * Inline counterpart to the popup. Same submit path, same memory, so a footer
 * signup also silences the popup for that visitor.
 */
export default function NewsletterFooterForm({
  source = "footer",
}: NewsletterFooterFormProps) {
  const { isSubmitting, isSuccess, error, submittedEmail, subscribe } =
    useNewsletterSignup({ source });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const errorId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void subscribe({ email, name });
  };

  return (
    <section
      aria-labelledby="newsletter-footer-title"
      className="border-t border-black/10 pt-8"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/30">
        {NEWSLETTER_CADENCE}
      </p>

      <h2
        id="newsletter-footer-title"
        className="mt-3 text-[22px] font-light leading-tight tracking-[-0.02em] text-[#111]"
        style={{ fontFamily: NEWSLETTER_SERIF_FONT }}
      >
        Field notes on applied AI.
      </h2>

      {isSuccess ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-[14px] font-light leading-relaxed text-[#4b5563]"
        >
          You&rsquo;re on the list. The first dispatch goes to{" "}
          <span className="font-medium text-[#111]">{submittedEmail}</span>.
        </p>
      ) : (
        <form className="mt-5" onSubmit={handleSubmit} noValidate>
          <label className="block">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">
              Email
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className="mt-2 w-full cursor-text border-0 border-b border-black/20 bg-transparent pb-2 text-[15px] font-light text-[#111] placeholder:text-black/25 transition-colors duration-200 focus:border-black focus:outline-none"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">
              Name <span className="font-light text-black/25">(optional)</span>
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Sydney Sanders"
              className="mt-2 w-full cursor-text border-0 border-b border-black/20 bg-transparent pb-2 text-[15px] font-light text-[#111] placeholder:text-black/25 transition-colors duration-200 focus:border-black focus:outline-none"
            />
          </label>

          {error && (
            <p
              id={errorId}
              role="alert"
              className="mt-3 text-[13px] font-light text-[#B42318]"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group mt-5 flex w-full cursor-pointer items-center justify-between gap-3 bg-[#0a0a0a] px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-black disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {isSubmitting ? "Subscribing" : "Subscribe"}
            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            />
          </button>

          <p className="mt-3 text-[12px] font-light leading-relaxed text-black/35">
            No sales emails. Unsubscribe in one click.
          </p>
        </form>
      )}
    </section>
  );
}
