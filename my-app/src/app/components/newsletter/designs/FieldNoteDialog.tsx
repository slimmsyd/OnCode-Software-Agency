"use client";

import Image from "next/image";
import { type FormEvent, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import {
  NEWSLETTER_SERIF_FONT,
  type NewsletterDesignId,
} from "@/lib/newsletter";
import { useNewsletterSignup } from "../useNewsletterSignup";

const DESIGN: NewsletterDesignId = "field-note";

export const FIELD_NOTE_TITLE_ID = "newsletter-field-note-title";

interface FieldNoteDialogProps {
  onClose: () => void;
  source?: string;
}

const ISSUE_CONTENTS = [
  { number: "01", label: "Shipped", detail: "the build, in plain English" },
  { number: "02", label: "Broke", detail: "what the last mile cost us" },
  { number: "03", label: "Moved", detail: "the number that changed" },
];

/**
 * Direction A — "Field Note".
 * A printed dispatch: white paper on the left, a black counterfoil holding the
 * form on the right, joined by a dashed tear line. Serif masthead, Inter body.
 */
export default function FieldNoteDialog({
  onClose,
  source = "popup",
}: FieldNoteDialogProps) {
  const reduceMotion = useReducedMotion();
  const { isSubmitting, isSuccess, error, submittedEmail, subscribe } =
    useNewsletterSignup({ source, design: DESIGN });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const errorId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void subscribe({ email, name });
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.99 }}
      transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.19, 1, 0.22, 1] }}
      className="nl-card mx-auto w-full max-w-[880px] border border-black/15 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.3)]"
    >
      <div className="nl-split grid">
        {/* Paper side: the masthead and what the letter contains. */}
        <div className="nl-perforation flex flex-col justify-between px-6 py-6 sm:px-9 sm:py-9 lg:px-10 lg:py-10">
          <div>
            {/* Masthead: the wordmark replaces the text logo. The PNG carries a
                few transparent pixels on each edge, so a hairline negative
                offset keeps it optically flush with the text below. */}
            <div className="flex items-center border-b border-black/15 pb-4">
              <Image
                src="/redesign/oncode-hero-wordmark.png"
                alt="OnCode"
                width={1024}
                height={193}
                sizes="200px"
                className="nl-masthead-logo -ml-[1px] w-auto object-contain"
              />
            </div>

            <h2
              id={FIELD_NOTE_TITLE_ID}
              className="mt-6 text-[clamp(28px,6cqw,46px)] font-light leading-[1.0] tracking-[-0.025em] text-[#111]"
              style={{ fontFamily: NEWSLETTER_SERIF_FONT }}
            >
              Field notes from the floor of applied AI.
            </h2>

            <p className="mt-3 max-w-[40ch] text-[15px] font-light leading-relaxed text-[#4b5563]">
              Every other week, one dispatch from the work itself. Written by
              the team building it, not the team marketing it.
            </p>

            <dl className="nl-issue-contents mt-6 space-y-3 border-t border-black/10 pt-5">
              {ISSUE_CONTENTS.map((item) => (
                <div key={item.number} className="flex items-baseline gap-3">
                  <dt className="w-6 shrink-0 text-[11px] font-medium tabular-nums text-black/35">
                    {item.number}
                  </dt>
                  <dd className="text-[13px] leading-snug text-[#111]">
                    <span className="font-semibold">{item.label}</span>
                    <span className="font-light text-[#6b7280]">
                      {", "}
                      {item.detail}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="nl-issue-contents mt-7 text-[12px] font-light italic leading-relaxed text-black/40">
            Twice a month. Leave whenever you like.
          </p>
        </div>

        {/* Counterfoil: the form, inverted to keep the eye on one action. */}
        <div className="relative flex flex-col justify-center bg-[#0a0a0a] px-6 py-7 sm:px-9 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Subscribe
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close newsletter signup"
              className="-mr-2 -mt-1 flex h-9 w-9 cursor-pointer items-center justify-center text-white/50 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          {isSuccess ? (
            <div className="mt-7" role="status" aria-live="polite">
              <p
                className="text-[32px] font-light leading-none tracking-[-0.02em] text-white"
                style={{ fontFamily: NEWSLETTER_SERIF_FONT }}
              >
                You&rsquo;re in.
              </p>
              <p className="mt-4 text-[14px] font-light leading-relaxed text-white/55">
                The first dispatch goes to{" "}
                <span className="text-white">{submittedEmail}</span>. Nothing
                else arrives in between.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-7 cursor-pointer text-[12px] font-semibold uppercase tracking-[0.16em] text-white underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Back to the site
              </button>
            </div>
          ) : (
            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <label className="block">
                <span className="text-[12px] font-medium text-white/45">
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
                  className="mt-2 w-full cursor-text border-0 border-b border-white/25 bg-transparent pb-2.5 text-[16px] font-light text-white placeholder:text-white/25 transition-colors duration-200 focus:border-white focus:outline-none"
                />
              </label>

              <label className="mt-6 block">
                <span className="text-[12px] font-medium text-white/45">
                  Your name{" "}
                  <span className="font-light text-white/30">(optional)</span>
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Sydney Sanders"
                  className="mt-2 w-full cursor-text border-0 border-b border-white/25 bg-transparent pb-2.5 text-[16px] font-light text-white placeholder:text-white/25 transition-colors duration-200 focus:border-white focus:outline-none"
                />
              </label>

              {error && (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-4 text-[13px] font-light text-[#FF9E8A]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-7 flex w-full cursor-pointer items-center justify-between gap-3 bg-white px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0a0a0a] transition-colors duration-200 hover:bg-white/90 disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {isSubmitting ? "Subscribing" : "Subscribe"}
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                />
              </button>

              <p className="mt-4 text-[12px] font-light leading-relaxed text-white/35">
                Free. No sales emails. Unsubscribe in one click.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
