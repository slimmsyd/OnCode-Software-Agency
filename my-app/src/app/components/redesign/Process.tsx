"use client";

import { Search, FileText, Bell, Rocket } from "lucide-react";

const STEPS = [
  {
    Icon: Search,
    title: "Diagnose",
    body: "The audit. We map how your business actually runs, price every manual leak, and rank what is worth fixing, before anyone builds anything.",
  },
  {
    Icon: FileText,
    title: "Specification",
    body: "We align the roadmap with your business model, define the problems to solve, and write a clear specification of the system, workflows, and outcomes.",
  },
  {
    Icon: Bell,
    title: "Development",
    body: "We build fast with modern frameworks and AI workflows, keeping you updated every step of the way.",
  },
  {
    Icon: Rocket,
    title: "Launch & Manage",
    body: "We deploy, train your team, and move the system onto the management layer, so it stays running long after launch day.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-screen-label="Process"
      className="relative mx-auto w-full max-w-[500px] px-4 py-16 text-black"
    >
      <h2 className="section-heading mb-1">A Natural Process</h2>
      <span className="text-[14px] text-[#767676]">Smooth like butter</span>

      <div className="relative mt-8 flex flex-col gap-14">
        <div className="absolute bottom-[60px] left-[25px] top-[60px] z-0 border-l-2 border-dashed border-[#d1d5db]" />
        {STEPS.map((s) => {
          const StepIcon = s.Icon;
          return (
            <div key={s.title} className="flex items-start gap-8">
              <div className="z-[1] grid h-[50px] w-[50px] flex-shrink-0 place-items-center rounded-full bg-white text-[#4b5563] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                <StepIcon size={22} />
              </div>
              <div>
                <h3 className="mb-2 text-[22px] font-semibold text-black">
                  {s.title}
                </h3>
                <p className="text-[16px] leading-[1.55] text-[#4b5563]">
                  {s.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
