"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  key: string;
  media?: string;
  title: string;
  kind: string;
  description: string;
  /** Destination URL — internal paths stay on-site; absolute URLs open externally. */
  link?: string;
  /** CTA label under the active card. Defaults by link type. */
  ctaLabel?: string;
  /**
   * How media fills the landscape filmstrip card.
   * Use "contain" for tall product UI (e.g. extension screenshots).
   */
  mediaFit?: "cover" | "contain";
  /**
   * Abstract card for confidential builds (no product screenshots).
   * Renders a branded poster instead of a photo.
   */
  poster?: {
    eyebrow: string;
    headline: string;
    footnote: string;
  };
}

function isInternalLink(link: string) {
  return link.startsWith("/");
}

const WORK_PROJECTS: Project[] = [
  {
    key: "obsidian-protocol",
    media: "/redesign/projects/obsidian-protocol.jpeg",
    title: "BlackW3B / Obsidian Protocol",
    kind: "Digital Infrastructure + CRM Automation",
    description:
      "Digital infrastructure and CRM automation for a leading-edge DeFi tokenization protocol, converting 1:1 gold-backed assets into digital tokens on the Solana blockchain.",
    link: "https://www.w3bs.fun/",
    ctaLabel: "View project →",
  },
  {
    key: "street-economics",
    media: "/redesign/projects/streetecon.webp",
    title: "Street Economics",
    kind: "Digital Infrastructure + CRM",
    description:
      "Full digital infrastructure for a 220+ member economic community - website development, hosting, and CRM setup to power membership, engagement, and growth.",
  },
  {
    key: "pos-extension",
    title: "POS Web Extension",
    kind: "Payments · Browser Extension",
    description:
      "Browser extension for repair shops on a legacy POS. Reroutes card and ACH through a shop-controlled payment layer so they cut vendor lock-in cost and set their own payment criteria. Full story on the case study.",
    link: "/work/pos-extension",
    ctaLabel: "Read the case study →",
    media: "/redesign/projects/pos-pay-extension.png",
    mediaFit: "contain",
  },
  {
    key: "boxraw",
    media: "/redesign/projects/boxraw.jpeg",
    title: "BoxRaw Labs",
    kind: "Web Application",
    description:
      "Custom web application built for a boxing performance lab to manage training data and coordinate internal team workflows.",
  },
  {
    key: "wepray2flourish",
    media: "/redesign/projects/wepray2flourish.jpeg",
    title: "We Pray To Flourish",
    kind: "Ecommerce + Digital Infrastructure",
    description:
      "Custom CRM, hosting, and digital infrastructure for an author-led brand - ecommerce site with Stripe payments, book sales, and newsletter growth.",
  },
  {
    key: "sj-wellness",
    media: "/redesign/projects/sj-wellness.jpeg",
    title: "SJ Wellness",
    kind: "Website",
    description: "Website designed and developed for a wellness center.",
  },
  {
    key: "new-world-television",
    media: "/redesign/projects/new-world-television.jpeg",
    title: "New World Television",
    kind: "Custom Website Design + Development",
    description:
      "Custom website design and development with booking automations and CRM setup for a media network platform.",
  },
  {
    key: "tint-labs",
    media: "/redesign/projects/tintlabs.jpeg",
    title: "Tint Labs",
    kind: "Website + Booking",
    description:
      "Website, booking, and lead capture for a car-tinting business - the build behind the case study.",
  },
  {
    key: "hrr-foundation",
    media: "/redesign/projects/hrr-foundation.png",
    title: "HRR Foundation",
    kind: "CRM Design + Development",
    description:
      "Full CRM designed and developed for a healthcare-access foundation - managing prevention, early intervention, mentorship, and community-based care programs.",
  },
  {
    key: "mcbride",
    media: "/redesign/projects/mcbride.png",
    title: "McBride Basketball Academy",
    kind: "Booking Platform",
    description:
      "Booking platform with Stripe payments, Google Calendar sync, and an admin dashboard for session management.",
  },
  {
    key: "prmnt-pro",
    media: "/redesign/projects/preeminent.jpeg",
    title: "Preeminent Professional Services",
    kind: "Corporate Site",
    description:
      "Website designed, developed, and maintained for facility management services.",
  },
  {
    key: "gliddy",
    media: "/redesign/projects/gliddy.jpeg",
    title: "Gliddy",
    kind: "Event Platform",
    description:
      "End-to-end event management platform built specifically for bartenders.",
  },
];

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
            The platforms our clients run on.
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
            const cardClassName = `relative aspect-[720/440] w-[min(720px,80vw)] flex-none snap-center overflow-hidden rounded-2xl bg-[#f3f4f6] transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none ${
              !isMobile && idle ? "scale-[0.94] opacity-45 grayscale" : ""
            } ${p.link && isActive ? "cursor-pointer" : ""}`;

            const cardContent = p.poster ? (
              <div
                className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-[#0a0a0a] p-8 select-none md:p-10"
                aria-hidden={!isActive}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                    {p.poster.eyebrow}
                  </p>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/70">
                    Extension
                  </span>
                </div>
                <div>
                  <p className="max-w-[14ch] text-[clamp(28px,3.5vw,40px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
                    {p.poster.headline}
                  </p>
                  <p className="mt-3 text-[13px] font-light tracking-wide text-white/50">
                    {p.poster.footnote}
                  </p>
                </div>
                {/* Abstract workflow marks */}
                <div className="absolute right-8 bottom-24 hidden h-16 w-16 items-center justify-center opacity-30 md:flex">
                  <div className="h-10 w-10 rounded-lg border border-white/30" />
                  <div className="absolute h-10 w-10 translate-x-3 translate-y-3 rounded-lg border border-white/20" />
                </div>
              </div>
            ) : p.media ? (
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
            ) : null;

            const setCardRef = (el: HTMLElement | null) => {
              cardRefs.current[i] = el;
            };

            if (p.link && isActive) {
              const internal = isInternalLink(p.link);
              if (internal) {
                return (
                  <Link
                    key={p.key}
                    href={p.link}
                    ref={setCardRef}
                    aria-label={`Read case study: ${p.title}`}
                    className={cardClassName}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <a
                  key={p.key}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={setCardRef}
                  aria-label={`View ${p.title}`}
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={p.key}
                ref={setCardRef}
                className={cardClassName}
              >
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
          className="hidden h-[52px] w-[52px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-transparent text-[17px] text-[#111111] transition-all duration-250 hover:border-black hover:bg-black hover:text-white min-[701px]:flex"
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
          {active.link &&
            (isInternalLink(active.link) ? (
              <Link
                href={active.link}
                className="mt-1 cursor-pointer text-[13px] font-medium uppercase tracking-[0.08em] text-[#111111] underline-offset-4 transition-colors duration-200 hover:text-black/70 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {active.ctaLabel ?? "Read the case study →"}
              </Link>
            ) : (
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 cursor-pointer text-[13px] font-medium uppercase tracking-[0.08em] text-[#111111] underline-offset-4 transition-colors duration-200 hover:text-black/70 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {active.ctaLabel ?? "View project →"}
              </a>
            ))}
        </div>
        <button
          onClick={next}
          aria-label="Next project"
          className="hidden h-[52px] w-[52px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-transparent text-[17px] text-[#111111] transition-all duration-250 hover:border-black hover:bg-black hover:text-white min-[701px]:flex"
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
            className={`h-[3px] w-7 cursor-pointer rounded-sm border-0 p-0 transition-colors duration-300 ${
              i === index ? "bg-black" : "bg-[#d1d5db]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}