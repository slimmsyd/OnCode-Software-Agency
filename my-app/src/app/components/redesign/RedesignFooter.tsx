"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { LINKEDIN_URL, SUBSTACK_URL } from "./lib";
import { trackOutboundClick } from "@/lib/analytics";

export default function RedesignFooter() {
  return (
    <footer
      data-screen-label="Footer"
      className="mx-auto w-full max-w-[500px] border-t border-black/5 px-4 pb-20 pt-12 text-black"
    >
      <Image
        src="/redesign/oncode-hero-wordmark.png"
        alt="OnCode"
        width={1024}
        height={193}
        className="h-8 w-auto object-contain"
      />
      <div className="mt-8 flex flex-col gap-6">
        <p className="text-[18px] text-black">
          AI and custom software: built for the operation, managed after.
        </p>

        <Link
          href="/work"
          className="w-fit cursor-pointer text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Work
        </Link>

        <Link
          href="/resources"
          className="w-fit cursor-pointer text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Resources
        </Link>

        <Link
          href="/contact"
          className="w-fit cursor-pointer text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Start a project
        </Link>

        <Link
          href="/ai-automation-local-business"
          className="w-fit cursor-pointer text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          AI automation for small businesses
        </Link>

        <Link
          href="/ai-automation-consultant"
          className="w-fit cursor-pointer text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          AI automation consultant
        </Link>

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

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackOutboundClick(LINKEDIN_URL, "Sydney Sanders LinkedIn footer", {
              source: "footer",
            })
          }
          className="group inline-flex w-fit cursor-pointer items-center gap-2.5 text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          aria-label="Sydney Sanders on LinkedIn (opens in a new tab)"
        >
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center border border-black/10 text-black transition-colors duration-200 group-hover:bg-black/[0.04]"
          >
            <Linkedin size={16} />
          </span>
          Sydney Sanders on LinkedIn
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
