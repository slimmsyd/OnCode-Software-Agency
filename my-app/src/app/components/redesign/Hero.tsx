"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import BookAuditButton from "./BookAuditButton";
import VslPlayer from "./VslPlayer";
import { scrollToId } from "./lib";

const HERO_MASK =
  "radial-gradient(ellipse 120% 120% at 92% 30%, black 0%, transparent 85%)";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncBlendMode = () => {
      video.style.mixBlendMode = video.currentSrc.includes(".webm")
        ? "normal"
        : "multiply";
    };

    video.addEventListener("loadeddata", syncBlendMode);
    syncBlendMode();
    return () => video.removeEventListener("loadeddata", syncBlendMode);
  }, []);

  return (
    <section data-screen-label="Hero" className="relative bg-white pt-24">
      {/* Intro: decorative layers stay in this box only — never over the VSL */}
      <div className="relative overflow-hidden pb-10">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            WebkitMaskImage: HERO_MASK,
            maskImage: HERO_MASK,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-contain object-[92%_center]"
            aria-hidden
          >
            <source src="/redesign/data-driven-bg.webm" type="video/webm" />
            <source src="/redesign/data-driven-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)," +
              " linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            WebkitMaskImage: HERO_MASK,
            maskImage: HERO_MASK,
          }}
        />

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
            WebkitMaskImage: HERO_MASK,
            maskImage: HERO_MASK,
          }}
        />

        <div className="relative z-10 mx-auto max-w-[880px] px-6 pt-10 text-center">
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
            className="oc-fade-up d-400 mx-auto font-light text-black"
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
        </div>
      </div>

      {/* VSL: isolated block on solid white — no decorative overlays */}
      <div
        id="vsl"
        className="relative z-20 mx-auto w-full max-w-[900px] scroll-mt-28 px-6 pb-12"
      >
        <VslPlayer className="shadow-[0_12px_40px_rgba(0,0,0,0.12)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[880px] px-6 pb-20 text-center">
        <div className="oc-fade-up d-600 flex flex-wrap items-center justify-center gap-6">
          <BookAuditButton source="hero" />
          <button
            onClick={() => scrollToId("work")}
            className="inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
          >
            See the work <ArrowRight size={14} />
          </button>
        </div>

        <div className="oc-fade-up d-600 mx-auto mt-10 flex max-w-[720px] flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-black/10 pt-8">
          <div className="flex items-center gap-1.5">
            <div className="flex text-[#111111]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[14px] font-semibold text-[#111111]">5.0</span>
            <span className="text-[13px] text-[#6b7280]">
              Verified Google reviews
            </span>
          </div>
          <span
            className="hidden h-4 w-px bg-black/15 sm:block"
            aria-hidden="true"
          />
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-black/45">
            BOXRAW LABS · HRR WELLNESS · TINT LABS · STREET ECONOMICS ·
            PREEMINENT
          </p>
        </div>

        <p className="oc-fade-up d-800 mt-11 text-[16px] font-light italic text-black/70">
          From idea to implementation, we keep you OnCode.
        </p>
      </div>
    </section>
  );
}