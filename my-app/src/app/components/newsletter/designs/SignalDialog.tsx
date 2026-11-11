"use client";

import Image from "next/image";
import { type FormEvent, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import type { NewsletterDesignId } from "@/lib/newsletter";
import { useNewsletterSignup } from "../useNewsletterSignup";

const DESIGN: NewsletterDesignId = "signal";

export const SIGNAL_TITLE_ID = "newsletter-signal-title";

interface SignalDialogProps {
  onClose: () => void;
  source?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Direction B — "Signal".
 * A dark instrument panel. One field up front, the optional name revealed on
 * demand, and a hairline readout across the top that fills as the email resolves.
 */
export default function SignalDialog({
  onClose,
  source = "popup",
}: SignalDialogProps) {
  const reduceMotion = useReducedMotion();
  const { isSubmitting, isSuccess, error, submittedEmail, subscribe } =
    useNewsletterSignup({ source, design: DESIGN });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const errorId = useId();

  const canSubmit = EMAIL_PATTERN.test(email.trim());
  const progress = email.trim() === "" ? 0 : canSubmit ? 100 : 42;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void subscribe({ email, name: showName ? name : undefined });
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 6 }}
      transition={{ duration: reduceMotion ? 0 : 0.26, ease: [0.19, 1, 0.22, 1] }}
      className="nl-card mx-auto w-full max-w-[540px] overflow-hidden border border-white/10 bg-[#07080a] text-white shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
    >
      {/* Readout: fills as the email becomes valid. Feedback, not decoration. */}
      <div className="h-[2px] w-full bg-white/[0.06]" aria-hidden>
        <div
          className="h-full bg-[#7EA6FF] transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="px-6 py-7 sm:px-9 sm:py-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#7EA6FF]" aria-hidden />
            <Image
              src="/redesign/oncode-hero-wordmark.png"
              alt="OnCode"
              width={1024}
              height={193}
              sizes="140px"
              className="-ml-[1px] h-5 w-auto object-contain [filter:invert(1)]"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close newsletter signup"
            className="-mr-2 flex h-9 w-9 cursor-pointer items-center justify-center text-white/45 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7EA6FF]"
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        {isSuccess ? (
          <div className="mt-6" role="status" aria-live="polite">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7EA6FF]">
              Subscribed
            </p>
            <h2
              id={SIGNAL_TITLE_ID}
              className="mt-3 text-[28px] font-normal leading-[1.1] tracking-[-0.02em] text-white"
            >
              You&rsquo;re on the list.
            </h2>
            <p className="mt-3 text-[14px] font-light leading-relaxed text-white/55">
              The first dispatch goes to{" "}
              <span className="text-white">{submittedEmail}</span>. Watch for it.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex cursor-pointer items-center gap-2 border border-white/20 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7EA6FF]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id={SIGNAL_TITLE_ID}
              className="mt-6 text-[clamp(26px,6cqw,34px)] font-normal leading-[1.08] tracking-[-0.025em] text-white"
            >
              The work, before it becomes a case study.
            </h2>
            <p className="mt-3 text-[14px] font-light leading-relaxed text-white/50">
              Short dispatches on agentic AI and custom software. What we ran,
              what it cost, what we&rsquo;d change.
            </p>

            <form className="mt-7" onSubmit={handleSubmit} noValidate>
              <div className="flex items-stretch border border-white/15 bg-white/[0.02] transition-colors duration-200 focus-within:border-[#7EA6FF]/70">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? errorId : undefined}
                  className="min-w-0 flex-1 cursor-text bg-transparent px-4 py-3.5 text-[15px] font-light text-white placeholder:text-white/25 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !canSubmit}
                  className="flex shrink-0 cursor-pointer items-center gap-2 border-l border-white/15 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:text-white/25 disabled:hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7EA6FF]"
                >
                  <span className="hidden sm:inline">
                    {isSubmitting ? "Sending" : "Subscribe"}
                  </span>
                  <ArrowRight size={16} aria-hidden />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowName((value) => !value)}
                aria-expanded={showName}
                className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-[12px] font-medium text-white/40 transition-colors duration-200 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7EA6FF]"
              >
                {showName ? "Remove name" : "Add your name (optional)"}
                <ChevronDown
                  size={13}
                  aria-hidden
                  className={`transition-transform duration-200 ${showName ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {showName && (
                  <motion.div
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                  >
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Name (optional)"
                      aria-label="Your name (optional)"
                      className="mt-3 w-full cursor-text border border-white/15 bg-white/[0.02] px-4 py-3 text-[15px] font-light text-white placeholder:text-white/25 transition-colors duration-200 focus:border-[#7EA6FF]/70 focus:outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-4 text-[13px] font-light text-[#FF9E8A]"
                >
                  {error}
                </p>
              )}

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11px] uppercase tracking-[0.14em] text-white/25">
                <span>Twice a month</span>
                <span>Unsubscribe anytime</span>
              </div>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}
