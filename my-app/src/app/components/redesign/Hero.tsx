"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BookAuditButton from "./BookAuditButton";
import { scrollToId } from "./lib";

export default function Hero() {
  return (
    <section
      data-screen-label="Hero"
      className="relative flex min-h-[68vh] flex-col overflow-hidden"
    >
      {/* Faint 40px grid, radial-masked toward top-right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)," +
            " linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)",
        }}
      />

      {/* Slow diagonal blue glow sweep */}
      <div
        className="oc-hero-glow pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 0%, transparent 45%," +
            " rgba(100,150,255,0.15) 48%, rgba(100,150,255,0.25) 50%," +
            " rgba(100,150,255,0.15) 52%, transparent 55%, transparent 100%)",
          backgroundSize: "200% 200%",
          animation: "oc-gridGlow 8s ease-in-out infinite",
          mixBlendMode: "overlay",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)",
        }}
      />

      <div className="relative z-[1] flex flex-1 items-center justify-center px-6 pb-20 pt-10">
        <div className="max-w-[880px] text-center">
          <div className="oc-fade-up flex flex-col items-center">
            <Image
              src="/redesign/oncode-wordmark.png"
              alt="OnCode"
              width={785}
              height={314}
              priority
              className="h-16 w-auto object-contain"
            />
            <p className="mt-3 text-[12px] font-light uppercase tracking-[0.05em] text-black/50">
              The AI Diagnostic Audit
            </p>
          </div>
          <h1 className="header-h1 oc-fade-up d-200 mb-6 mt-6 text-black">
            Find Where Your Business Leaks Time And Money.
          </h1>
          <p
            className="oc-fade-up d-400 mx-auto mt-6 font-light text-black"
            style={{
              maxWidth: 720,
              fontSize: 18,
              lineHeight: 1.6,
              textWrap: "pretty",
            }}
          >
            Every step your team does by hand costs a little. A few thousand
            times a year, it stops being little. We map how your business
            actually runs, put a dollar figure on every leak, and hand you a
            ranked plan to seal them. Then, if you want, we build it.
          </p>

          <div className="oc-fade-up d-600 mt-9 flex flex-wrap items-center justify-center gap-6">
            <BookAuditButton />
            <button
              onClick={() => scrollToId("work")}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
            >
              See the work <ArrowRight size={14} />
            </button>
          </div>

          <p className="oc-fade-up d-600 mt-3 text-[12px] text-black/50">
            30-minute call. We scope the audit together
          </p>

          <p className="oc-fade-up d-800 mt-11 text-[16px] font-light italic text-black/70">
            From idea to implementation, we keep you OnCode.
          </p>
        </div>
      </div>
    </section>
  );
}
