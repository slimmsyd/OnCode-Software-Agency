"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { bookAudit } from "../lib";

export default function ProofSection() {
  return (
    <section
      id="proof"
      data-screen-label="AEO Proof: Tint Labs"
      className="bg-white px-6 pb-24"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-6 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
          Proof
        </p>
        <h2
          className="mb-12 text-[#111]"
          style={{
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          A real leak. A real build.
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:h-[480px]">
            <Image
              src="/redesign/projects/tintlabs.jpeg"
              alt="Tint Labs automation build by OnCode"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
              Case study
            </p>
            <h3
              className="text-[#111]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 36px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Tint Labs
            </h3>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The leak:</strong>{" "}
              268 leads in six months. 50 never got a reply. Quotes sat in the
              wrong inbox; weekend inquiries waited until Monday. Roughly $7,000
              in work walked away.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The build:</strong>{" "}
              A site that books work, captures every lead, and drafts the exact
              quote (vehicle, film, price) within minutes of the form.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4b5563]">
              <strong className="font-semibold text-black">The result:</strong>{" "}
              Lead flow nearly doubled to about 18 a week. Every inquiry logged,
              labeled, and answerable from one place, nights and weekends
              included.
            </p>
            <button
              type="button"
              onClick={() => bookAudit("aeo_consultant_proof")}
              className="mt-1 inline-flex cursor-pointer items-center gap-2 self-start text-[13px] font-medium uppercase tracking-[0.08em] text-black transition-opacity duration-200 hover:opacity-70"
            >
              Find your leak, book the audit <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
