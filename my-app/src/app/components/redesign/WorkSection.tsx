"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WORK_PROJECTS, projectPath } from "@/app/work/projects";
import { sharpIconButtonClass } from "./sharp-button";


const GAP = 32;
const MOBILE_MAX = 700;

export default function WorkSection() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollSyncRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const total = WORK_PROJECTS.length;
  const active = WORK_PROJECTS[index];

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const measure = useCallback(() => {
    if (isMobile) return;
    const viewport = viewportRef.current;
    const card = cardRefs.current[0];
    if (!viewport || !card) return;
    const cardW = card.offsetWidth;
    setOffset((viewport.clientWidth - cardW) / 2 - index * (cardW + GAP));
  }, [index, isMobile]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const updateIndexFromScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || scrollSyncRef.current) return;

    const center = viewport.scrollLeft + viewport.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setIndex((current) => (current !== closest ? closest : current));
  }, []);

  const scrollToIndex = useCallback((targetIndex: number, smooth = true) => {
    const card = cardRefs.current[targetIndex];
    const viewport = viewportRef.current;
    if (!card || !viewport) return;

    scrollSyncRef.current = true;
    card.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      inline: "center",
      block: "nearest",
    });

    window.setTimeout(() => {
      scrollSyncRef.current = false;
    }, smooth ? 500 : 0);
  }, []);

  const goTo = useCallback(
    (target: number) => {
      setIndex(target);
      if (isMobile) scrollToIndex(target);
    },
    [isMobile, scrollToIndex],
  );

  const prev = () => goTo((index - 1 + total) % total);
  const next = () => goTo((index + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    if (!start || !isMobile) return;

    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;

    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) next();
      else prev();
    }

    touchStartRef.current = null;
  };

  return (
    <section
      id="work"
      data-screen-label="Selected Work - Filmstrip"
      className="bg-white pb-[88px] pt-[112px]"
    >
      <div className="mx-auto mb-12 flex max-w-[1280px] items-end justify-between gap-6 px-6 min-[701px]:px-10">
        <div>
          <p className="mb-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#767676]">
            Selected Work
          </p>
          <h2 className="text-[clamp(32px,4vw,44px)] font-light leading-[1.05] tracking-[-0.02em] text-[#111111]">
            Recent success stories.
          </h2>
        </div>
        <span className="whitespace-nowrap pb-1.5 text-[13px] tracking-[0.14em] text-black/45">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div
        ref={viewportRef}
        onScroll={updateIndexFromScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ scrollPaddingInline: isMobile ? "10vw" : undefined }}
        className="w-full touch-pan-x overflow-hidden [-webkit-overflow-scrolling:touch] max-[700px]:snap-x max-[700px]:snap-mandatory max-[700px]:overflow-x-auto max-[700px]:overscroll-x-contain max-[700px]:[-ms-overflow-style:none] max-[700px]:[scrollbar-width:none] max-[700px]:[&::-webkit-scrollbar]:hidden"
      >
        <div
          className="flex w-max gap-8 motion-reduce:transition-none"
          style={
            isMobile
              ? undefined
              : {
                  transform: `translateX(${offset}px)`,
                  transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                }
          }
        >
          {WORK_PROJECTS.map((p, i) => {
            const idle = i !== index;
            const isActive = i === index;
            const cardClassName = `relative aspect-[720/440] w-[min(720px,80vw)] flex-none snap-center overflow-hidden bg-[#f3f4f6] transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none ${
              !isMobile && idle ? "scale-[0.94] opacity-45 grayscale" : ""
            } ${isActive ? "cursor-pointer" : ""}`;

            const cardContent = (
              <Image
                src={p.media}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 80vw, 720px"
                className={`pointer-events-none select-none ${
                  p.mediaFit === "contain"
                    ? "object-contain object-center p-4 md:p-6"
                    : "object-cover"
                }`}
                draggable={false}
              />
            );

            const setCardRef = (el: HTMLElement | null) => {
              cardRefs.current[i] = el;
            };

            if (isActive) {
              return (
                <Link
                  key={p.key}
                  href={projectPath(p.key)}
                  ref={setCardRef}
                  aria-label={`Read project: ${p.title}`}
                  className={cardClassName}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={p.key} ref={setCardRef} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>

      {isMobile && (
        <p className="mt-4 text-center text-[12px] font-light tracking-wide text-[#9ca3af]">
          Swipe to explore our work
        </p>
      )}

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 min-[701px]:flex-row min-[701px]:px-10">
        <button
          onClick={prev}
          aria-label="Previous project"
          className={`hidden flex-shrink-0 text-[17px] min-[701px]:flex ${sharpIconButtonClass}`}
        >
          ←
        </button>
        <div
          aria-live="polite"
          className="flex max-w-[560px] flex-col items-center gap-2.5 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#767676]">
            {active.kind}
          </p>
          <p className="text-[26px] font-normal tracking-[-0.015em] text-[#111111]">
            {active.title}
          </p>
          <p className="text-[15px] font-light leading-[1.6] text-[#4b5563]">
            {active.description}
          </p>
          <Link
            href={projectPath(active.key)}
            className="mt-1 cursor-pointer text-[13px] font-medium uppercase tracking-[0.08em] text-[#111111] underline-offset-4 transition-colors duration-200 hover:text-black/70 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Read the project →
          </Link>
        </div>
        <button
          onClick={next}
          aria-label="Next project"
          className={`hidden flex-shrink-0 text-[17px] min-[701px]:flex ${sharpIconButtonClass}`}
        >
          →
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2.5 min-[701px]:mt-9">
        {WORK_PROJECTS.map((p, i) => (
          <button
            key={p.key}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-[3px] w-7 cursor-pointer border-0 p-0 transition-colors duration-300 ${
              i === index ? "bg-black" : "bg-[#d1d5db]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
