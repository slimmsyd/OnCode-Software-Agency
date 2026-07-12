"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { SUBSTACK_URL } from "./lib";
import { trackOutboundClick } from "@/lib/analytics";

// Editorial CTA: founder writing on Substack (PromptimusPrime).
// Placed after Founder so personal voice → ongoing content feels continuous.
export default function SubstackSection() {
  return (
    <section
      id="writing"
      data-screen-label="Substack writing"
      className="bg-white"
      style={{
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        padding: "96px 24px",
        scrollMarginTop: 100,
      }}
    >
      <div className="oc-fade-up mx-auto max-w-[1100px]">
        <p
          className="mb-6 text-[14px] font-light uppercase tracking-[0.05em]"
          style={{ color: "rgba(0,0,0,0.5)" }}
        >
          From the founder
        </p>
        <h2
          className="mb-4 text-[#111]"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Writing that ships with the work.
        </h2>
        <p
          className="mb-12 font-light text-[#6b7280]"
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: 620,
            textWrap: "pretty",
          }}
        >
          Field notes on AI, automation, and building software that actually
          runs a business, not just a demo.
        </p>

        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackOutboundClick(SUBSTACK_URL, "PromptimusPrime Substack", {
              source: "substack_section",
            })
          }
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#0a0a0a] p-8 text-white transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10"
          aria-label="Read PromptimusPrime on Substack (opens in a new tab)"
        >
          {/* Subtle Substack accent: brand orange, never emoji */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#FF6719] transition-all duration-300 group-hover:w-1.5"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF6719]/[0.08] blur-3xl transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />

          <div className="relative flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                <BookOpen size={18} className="text-white/90" aria-hidden />
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/50">
                Substack
              </span>
            </div>

            <div>
              <p
                className="mb-2 text-2xl font-medium tracking-[-0.01em] text-white md:text-[28px]"
                style={{ lineHeight: 1.15 }}
              >
                PromptimusPrime
              </p>
              <p className="mb-3 text-[15px] font-light italic text-white/55">
                More than meets the tongue
              </p>
              <p
                className="max-w-[480px] text-[15px] font-light leading-relaxed text-white/70"
                style={{ textWrap: "pretty" }}
              >
                Essays and dispatches on prompts, systems, and shipping software
                that earns its keep.
              </p>
            </div>
          </div>

          <div className="relative mt-8 flex shrink-0 items-center gap-3 md:mt-0">
            <span className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[14px] font-medium text-black transition-opacity duration-200 group-hover:opacity-90">
              Read on Substack
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
