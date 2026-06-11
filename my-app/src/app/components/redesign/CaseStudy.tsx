"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { bookAudit } from "./lib";

// Per the design handoff: ship without the stat row rather than with fake
// numbers. Flip SHOW_STATS to true and fill STATS once real Tint Labs figures
// are supplied by the client.
const SHOW_STATS = false;
const STATS = [
  { value: "—%", label: "of bookings now handled online, without a phone call" },
  { value: "— hrs", label: "of weekly admin removed from the owner's plate" },
  { value: "— min", label: "average response time to a new lead, down from hours" },
];

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 border-t-2 border-black pt-4">
      <span className="text-[44px] font-light leading-none tracking-[-0.02em] text-black">
        {value}
      </span>
      <span className="text-[14px] leading-[1.45] text-[#6b7280]">{label}</span>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      data-screen-label="Case Study: Tint Labs"
      className="bg-white px-6 pb-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:h-[560px]">
            <Image
              src="/redesign/projects/tintlabs.jpeg"
              alt="Tint Labs build"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
              Case study
            </p>
            <h2
              className="text-[#111]"
              style={{
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Tint Labs
            </h2>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The leak:</strong>{" "}
              bookings, quotes, and follow-ups handled by phone and memory.
              Hours of admin every week, and leads going cold between jobs.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The build:</strong>{" "}
              a site that books work directly, captures every lead, and gives
              the shop one admin view of the day, built and launched in weeks,
              managed since.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The result:</strong>{" "}
              the operation runs through the system, not the owner&apos;s phone.
            </p>
            <button
              onClick={bookAudit}
              className="mt-1 inline-flex items-center gap-2 self-start text-[13px] font-medium uppercase tracking-[0.08em] text-black"
            >
              Find your leak, book the audit <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {SHOW_STATS && (
          <div className="mt-[72px] grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {STATS.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
