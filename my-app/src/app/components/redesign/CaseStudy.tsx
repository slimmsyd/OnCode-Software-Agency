"use client";

import Image from "next/image";
import Link from "next/link";
import { bookAudit } from "./lib";
import { sharpButtonClass } from "./sharp-button";

// Per the design handoff: ship without the stat row rather than with fake
// numbers. Flip SHOW_STATS to true and fill STATS once real Tint Labs figures
// are supplied by the client.
const SHOW_STATS = false;
const STATS = [
  { value: "-%", label: "of bookings now handled online, without a phone call" },
  { value: "- hrs", label: "of weekly admin removed from the owner's plate" },
  { value: "- min", label: "average response time to a new lead, down from hours" },
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
          <Link
            href="/work/tint-labs"
            className="relative block h-[420px] w-full overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:h-[560px]"
            aria-label="Read the Tint Labs case study"
          >
            <Image
              src="/redesign/projects/tintlabs.jpeg"
              alt="Tint Labs build"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
            />
          </Link>
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
              <Link
                href="/work/tint-labs"
                className="text-inherit no-underline transition-colors duration-200 hover:text-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Tint Labs
              </Link>
            </h2>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The leak:</strong>{" "}
              268 leads came through in six months. 50 of them never heard back.
              Quotes typed out but sent to the wrong inbox, weekend inquiries
              sitting until Monday. Roughly $7,000 in work walked away quietly.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The build:</strong>{" "}
              a site that books work directly, captures every lead, and drafts
              the customer&apos;s exact quote, right vehicle, right price,
              within minutes of the form coming in. Built and launched in
              weeks, managed since.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The result:</strong>{" "}
              lead flow nearly doubled to 18 a week. Every inquiry logged,
              labeled, and answered from one place, nights, weekends, all of it.
            </p>
            <Link
              href="/work/tint-labs"
              className="text-[15px] font-medium text-[#111] underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Read the Tint Labs case study
            </Link>
            <a
              href="/#book"
              onClick={(event) => {
                event.preventDefault();
                bookAudit("case_study");
              }}
              className={`mt-1 self-start ${sharpButtonClass}`}
            >
              Book a call
            </a>
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
