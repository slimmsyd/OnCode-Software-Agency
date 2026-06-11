"use client";

import { ArrowRight } from "lucide-react";
import { scrollToId } from "./lib";

const TIERS = [
  {
    num: "01",
    name: "Digital Presence",
    outcome: "Get found and chosen.",
    body: "We design and launch the site, wire it to capture leads, and connect the channels your customers already use, so the work sells itself while you do it.",
  },
  {
    num: "02",
    name: "Web Applications",
    outcome: "Run the operation from one place.",
    body: "We build booking, payments, client portals, and admin dashboards shaped to the way you already operate.",
  },
  {
    num: "03",
    name: "Custom Software",
    outcome: "Own the system, not the workaround.",
    body: "We replace the spreadsheet-and-email machine with software built to your exact process. Yours to keep, ready to scale.",
  },
  {
    num: "04",
    name: "AI & Workflow Automation",
    outcome: "Stop doing it by hand.",
    body: "We automate the repeated steps like intake, follow-up, invoicing, and reporting, so they run without anyone touching them.",
  },
];

function FoundationBar() {
  return (
    <div className="mt-12 flex flex-wrap items-baseline justify-between gap-6 rounded-2xl bg-[#0a0a0a] px-10 py-9 text-white">
      <div className="max-w-[640px]">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-white/50">
          Retainer: Ongoing Management
        </p>
        <h3 className="mb-3 text-2xl font-medium tracking-[-0.01em] text-white">
          The foundation under every build.
        </h3>
        <p className="text-[15px] leading-relaxed text-white/70">
          Hosting, monitoring, fixes, and a standing engineer on call. Every
          system we ship lands on this layer and stays running, measured,
          maintained, improved.
        </p>
      </div>
      <button
        onClick={() => scrollToId("audit")}
        className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-white"
      >
        Which tier is yours? The audit tells you <ArrowRight size={14} />
      </button>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-screen-label="Services"
      className="bg-white px-6 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-6 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
          What we build
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
          One ladder. Four rungs.
        </h2>
        <p
          className="mb-16 font-light text-[#6b7280]"
          style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620, textWrap: "pretty" }}
        >
          Every engagement lands on one of these tiers, and every tier sits on
          the same management foundation. The audit tells you which rung is
          yours.
        </p>

        <div>
          {TIERS.map((t) => (
            <div
              key={t.num}
              className="grid grid-cols-[40px_1fr] gap-x-8 gap-y-1 border-t border-black/10 px-2 py-9 transition-colors duration-300 hover:bg-[#fafafa] md:grid-cols-[64px_300px_1fr] md:gap-8"
            >
              <span className="pt-1.5 text-[14px] font-medium tabular-nums text-black/35">
                {t.num}
              </span>
              <h3 className="col-start-2 text-[22px] font-semibold tracking-[-0.01em] text-black md:col-start-auto">
                {t.name}
              </h3>
              <div className="col-start-2 md:col-start-auto">
                <p className="mb-2 text-[18px] font-medium text-black">{t.outcome}</p>
                <p className="max-w-[560px] text-[15px] leading-relaxed text-[#6b7280]">
                  {t.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-black/10" />
          <FoundationBar />
        </div>
      </div>
    </section>
  );
}
