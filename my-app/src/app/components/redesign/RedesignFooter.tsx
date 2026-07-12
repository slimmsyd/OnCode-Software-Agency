"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SUBSTACK_URL } from "./lib";
import { trackOutboundClick } from "@/lib/analytics";

export default function RedesignFooter() {
  return (
    <footer
      data-screen-label="Footer"
      className="mx-auto w-full max-w-[500px] border-t border-black/5 px-4 pb-20 pt-12 text-black"
    >
      <Image
        src="/redesign/oncode-wordmark.png"
        alt="OnCode"
        width={786}
        height={236}
        className="h-8 w-auto object-contain"
      />
      <div className="mt-8 flex flex-col gap-6">
        <p className="text-[18px] text-black">
          Custom software and AI consultation: diagnosed first, built right,
          managed after.
        </p>

        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackOutboundClick(SUBSTACK_URL, "PromptimusPrime footer", {
              source: "footer",
            })
          }
          className="group inline-flex w-fit cursor-pointer items-center gap-1.5 text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          aria-label="Read PromptimusPrime on Substack (opens in a new tab)"
        >
          PromptimusPrime on Substack
          <ArrowUpRight
            size={14}
            className="text-black/50 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
            aria-hidden
          />
        </a>

        <p className="text-[14px] text-[#767676]">
          © 2026 Oncode, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
