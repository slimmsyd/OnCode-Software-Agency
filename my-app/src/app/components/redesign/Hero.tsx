"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import BookAuditButton from "./BookAuditButton";
import { scrollToId } from "./lib";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncBlendMode = () => {
      // WebM has keyed transparency; MP4 fallback uses multiply to hide white.
      video.style.mixBlendMode = video.currentSrc.includes(".webm")
        ? "normal"
        : "multiply";
    };

    video.addEventListener("loadeddata", syncBlendMode);
    syncBlendMode();
    return () => video.removeEventListener("loadeddata", syncBlendMode);
  }, []);
  return (
    <section
      data-screen-label="Hero"
      className="relative flex min-h-[68vh] flex-col overflow-hidden bg-white pt-24"
    >
      {/* Looping brand video — white bg blends with page; grid stays on top */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-contain object-center"
          aria-hidden
        >
          {/* WebM: white background keyed out to alpha */}
          <source src="/redesign/data-driven-bg.webm" type="video/webm" />
          {/* MP4 fallback: multiply hides any remaining white on the page */}
          <source src="/redesign/data-driven-bg.mp4" type="video/mp4" />
        </video>
      </div>

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
            <BookAuditButton source="hero" />
            <button
              onClick={() => scrollToId("work")}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
            >
              See the work <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="oc-fade-up d-700 mx-auto mt-10 flex max-w-[720px] flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-black/10 pt-8"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#111111]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[14px] font-semibold text-[#111111]">5.0</span>
              <span className="text-[13px] text-[#6b7280]">Verified Google reviews</span>
            </div>
            <span className="hidden h-4 w-px bg-black/15 sm:block" aria-hidden="true" />
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.06em] text-black/45"
            >
              BOXRAW LABS · HRR WELLNESS · TINT LABS · STREET ECONOMICS · PREEMINENT
            </p>
          </div>

          <p className="oc-fade-up d-800 mt-11 text-[16px] font-light italic text-black/70">
            From idea to implementation, we keep you OnCode.
          </p>
        </div>
      </div>
    </section>
  );
}
