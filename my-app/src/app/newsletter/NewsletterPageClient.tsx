"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NEWSLETTER_SERIF_FONT } from "@/lib/newsletter";
import { useNewsletterSignup } from "@/app/components/newsletter/useNewsletterSignup";

/** One page, one action: the front door of the newsletter. */
const SOURCE = "newsletter-page";

const HEADLINE_LINES = [
  "Field notes",
  "from the floor",
  "of applied AI.",
];

const ease = [0.19, 1, 0.22, 1] as const;

export default function NewsletterPageClient() {
  const reduceMotion = useReducedMotion();
  const { isSubmitting, isSuccess, error, submittedEmail, subscribe } =
    useNewsletterSignup({ source: SOURCE, design: "field-note" });

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const errorId = useId();
  const successRef = useRef<HTMLParagraphElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void subscribe({ email, name });
  };

  // The form is replaced by the confirmation, so carry focus to it.
  useEffect(() => {
    if (isSuccess) successRef.current?.focus();
  }, [isSuccess]);

  const headlineMotion = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : "0.55em" },
    shown: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0a0a0a]">
      <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-5 pt-7 sm:px-8 sm:pt-9">
        <Link
          href="/"
          aria-label="OnCode home"
          className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <Image
            src="/redesign/oncode-hero-wordmark.png"
            alt="OnCode"
            width={1024}
            height={193}
            priority
            sizes="140px"
            className="-ml-[1px] h-7 w-auto object-contain"
          />
        </Link>

        <Link
          href="/"
          className="group flex cursor-pointer items-center gap-2 text-[13px] text-black/45 transition-colors duration-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <ArrowLeft
            size={14}
            aria-hidden
            className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
          />
          Back to the site
        </Link>
      </header>

      <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 sm:px-8">
        <div className="mt-16 grid items-start gap-14 sm:mt-20 lg:mt-28 lg:grid-cols-[minmax(0,1fr)_392px] lg:gap-24">
          <div>
            <motion.h1
              initial="hidden"
              animate="shown"
              variants={{
                shown: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.075,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="text-[clamp(2.6rem,7.4vw,6.5rem)] font-light leading-[0.94] tracking-[-0.035em]"
              style={{ fontFamily: NEWSLETTER_SERIF_FONT }}
            >
              {HEADLINE_LINES.map((line) => (
                <span key={line} className="block">
                  <motion.span variants={headlineMotion} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : 0.42,
                ease,
              }}
              className="mt-8 max-w-[46ch] text-[17px] font-light leading-[1.65] text-[#4b5563] sm:text-[18px]"
            >
              Twice a month, straight from the work itself. What we shipped,
              what broke on the way, and the number that moved after. Written by
              the team building it.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.28,
              ease,
            }}
            className="relative lg:mt-4"
          >
            {/* Perforation: two bites taken out of the top edge, with a dashed
                seam running between them, so the form reads as a reply slip
                torn off the sheet. The bites are exactly tangent to the two
                1rem circles, so the dashes meet the notches cleanly. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0"
            >
              <span className="absolute left-7 top-0 h-4 w-4 -translate-y-1/2 rounded-full bg-white" />
              <span className="absolute right-7 top-0 h-4 w-4 -translate-y-1/2 rounded-full bg-white" />
              <span className="absolute left-[44px] right-[44px] top-px border-t border-dashed border-white/30" />
            </div>

            <div className="relative bg-[#0a0a0a] px-6 pb-8 pt-11 sm:px-8">
              {isSuccess ? (
                <div role="status" aria-live="polite">
                  <p
                    ref={successRef}
                    tabIndex={-1}
                    className="text-[34px] font-light leading-none tracking-[-0.02em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    style={{ fontFamily: NEWSLETTER_SERIF_FONT }}
                  >
                    You&rsquo;re on the list.
                  </p>
                  <p className="mt-4 text-[14px] font-light leading-relaxed text-white/55">
                    The first note goes to{" "}
                    <span className="text-white">{submittedEmail}</span>.
                    Nothing else arrives in between.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-block cursor-pointer text-[12px] font-medium text-white underline decoration-white/35 underline-offset-4 transition-colors duration-200 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Back to oncode.com
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p
                    className="text-[22px] font-light leading-tight tracking-[-0.01em] text-white"
                    style={{ fontFamily: NEWSLETTER_SERIF_FONT }}
                  >
                    Join the list.
                  </p>

                  <label className="mt-7 block">
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
                      className="mt-2 w-full cursor-text appearance-none border-0 border-b border-white/25 bg-transparent pb-2.5 text-[16px] font-light text-white placeholder:text-white/25 transition-colors duration-200 focus:border-white focus:outline-none focus-visible:outline-none"
                    />
                  </label>

                  <label className="mt-6 block">
                    <span className="text-[12px] font-medium text-white/45">
                      Name{" "}
                      <span className="font-light text-white/30">
                        (optional)
                      </span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Sydney Sanders"
                      className="mt-2 w-full cursor-text appearance-none border-0 border-b border-white/25 bg-transparent pb-2.5 text-[16px] font-light text-white placeholder:text-white/25 transition-colors duration-200 focus:border-white focus:outline-none focus-visible:outline-none"
                    />
                  </label>

                  {error && (
                    <p
                      id={errorId}
                      role="alert"
                      className="mt-4 text-[13px] font-light text-[#FFA08C]"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-7 flex w-full cursor-pointer items-center justify-between gap-3 bg-white px-5 py-4 text-[13px] font-medium text-[#0a0a0a] transition-colors duration-200 hover:bg-white/85 disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {isSubmitting ? "Joining" : "Join the list"}
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                    />
                  </button>

                  <p className="mt-4 text-[12px] font-light leading-relaxed text-white/35">
                    No sales emails. One click to leave.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="mx-auto mt-20 w-full max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col gap-3 border-t border-black/10 py-7 text-[12px] text-black/35 sm:flex-row sm:items-center sm:justify-between">
          <span>OnCode, field notes on applied AI.</span>
          <span>Twice a month.</span>
        </div>
      </footer>
    </div>
  );
}
