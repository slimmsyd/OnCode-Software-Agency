"use client";

import React from "react";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import ReviewCard from "../ReviewCard";
import { GOOGLE_REVIEWS_URL, reviewRows } from "../reviews";

const [firstRow, secondRow] = reviewRows;

export default function HeroProofBand() {
  return (
    <section
      data-screen-label="Hero Proof Band"
      className="overflow-hidden border-t border-black/10 bg-white py-16"
    >
      <div className="mx-auto mb-10 max-w-[1100px] px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#6b7280]">
            Why clients hand us the technical problem
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#6b7280]">
            <span className="font-semibold text-[#111111]">5.0</span>
            <div className="flex text-[#111111]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span>· Verified Google reviews</span>
            <button
              type="button"
              onClick={() => window.open(GOOGLE_REVIEWS_URL, "_blank", "noopener,noreferrer")}
              className="ml-1 cursor-pointer rounded-full border border-black/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-[#111111] transition-colors duration-200 hover:border-black/30 hover:bg-black/[0.03]"
            >
              See all
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="py-4"
          style={{ "--duration": "30s", "--gap": "1.5rem" } as React.CSSProperties}
        >
          {firstRow.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              {...review}
              className="w-80 cursor-pointer"
            />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="py-4"
          style={{ "--duration": "30s", "--gap": "1.5rem" } as React.CSSProperties}
        >
          {secondRow.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}-rev`}
              {...review}
              className="w-80 cursor-pointer"
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" />
      </div>
    </section>
  );
}
