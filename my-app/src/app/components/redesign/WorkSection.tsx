"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Project {
  key: string;
  media: string;
  title: string;
  kind: string;
  description: string;
}

// Client builds only — operational systems lead; Web3 work stays off the
// first impression (link it elsewhere or keep it behind a separate view).
// Add Screw It Pro here once it is live.
const WORK_PROJECTS: Project[] = [
  {
    key: "street-economics",
    media: "/redesign/projects/streetecon.png",
    title: "Street Economics",
    kind: "Digital Infrastructure + CRM",
    description:
      "Full digital infrastructure for a 220+ member economic community — website development, hosting, and CRM setup to power membership, engagement, and growth.",
  },
  {
    key: "hrr-foundation",
    media: "/redesign/projects/hrr-foundation.png",
    title: "HRR Foundation",
    kind: "CRM Design + Development",
    description:
      "Full CRM designed and developed for a healthcare-access foundation — managing prevention, early intervention, mentorship, and community-based care programs.",
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
    key: "tint-labs",
    media: "/redesign/projects/tintlabs.jpeg",
    title: "Tint Labs",
    kind: "Website + Booking",
    description:
      "Website, booking, and lead capture for a car-tinting business — the build behind the case study.",
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
    key: "boxraw",
    media: "/redesign/projects/boxraw.jpeg",
    title: "BoxRaw Labs",
    kind: "Video Platform",
    description:
      "Video labeling platform for boxing analysis with multi-camera sync, team workflows, and automated clip export.",
  },
  {
    key: "gliddy",
    media: "/redesign/projects/gliddy.jpeg",
    title: "Gliddy",
    kind: "Event Platform",
    description:
      "End-to-end event management platform built specifically for bartenders.",
  },
  {
    key: "sj-wellness",
    media: "/redesign/projects/sj-wellness.jpeg",
    title: "SJ Wellness",
    kind: "Website",
    description: "Website designed and developed for a wellness center.",
  },
];

const GAP = 32;

export default function WorkSection() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const total = WORK_PROJECTS.length;
  const active = WORK_PROJECTS[index];

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const card = cardRef.current;
    if (!viewport || !card) return;
    // offsetWidth is layout width — unaffected by the idle scale() transform
    const cardW = card.offsetWidth;
    setOffset((viewport.clientWidth - cardW) / 2 - index * (cardW + GAP));
  }, [index]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      id="work"
      data-screen-label="Selected Work — Filmstrip"
      className="bg-white pb-[88px] pt-[112px]"
    >
      <div className="mx-auto mb-12 flex max-w-[1280px] items-end justify-between gap-6 px-10">
        <div>
          <p className="mb-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#767676]">
            Selected Work
          </p>
          <h2 className="text-[clamp(32px,4vw,44px)] font-light leading-[1.05] tracking-[-0.02em] text-[#111111]">
            The platforms our clients run on.
          </h2>
        </div>
        <span className="whitespace-nowrap pb-1.5 text-[13px] tracking-[0.14em] text-black/45">
          {String(index + 1).padStart(2, "0")} —{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div ref={viewportRef} className="w-full overflow-hidden">
        <div
          className="flex w-max gap-8 motion-reduce:transition-none"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {WORK_PROJECTS.map((p, i) => {
            const idle = i !== index;
            return (
              <div
                key={p.key}
                ref={i === 0 ? cardRef : undefined}
                onClick={() => setIndex(i)}
                className={`relative aspect-[720/440] w-[min(720px,80vw)] flex-none cursor-pointer overflow-hidden rounded-2xl bg-[#f3f4f6] transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none ${
                  idle ? "scale-[0.94] opacity-45 grayscale" : ""
                }`}
              >
                <Image
                  src={p.media}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 720px"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center justify-between gap-6 px-10 min-[701px]:flex-row">
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
        </div>
        <button
          onClick={next}
          aria-label="Next project"
          className="hidden h-[52px] w-[52px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-transparent text-[17px] text-[#111111] transition-all duration-250 hover:border-black hover:bg-black hover:text-white min-[701px]:flex"
        >
          →
        </button>
      </div>

      <div className="mt-9 flex justify-center gap-2.5">
        {WORK_PROJECTS.map((p, i) => (
          <button
            key={p.key}
            onClick={() => setIndex(i)}
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
