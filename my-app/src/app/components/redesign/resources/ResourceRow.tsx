"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { trackOutboundClick } from "@/lib/analytics";
import type { ResourceItem } from "./resources-data";
import ResourceCoverPreview from "./ResourceCoverPreview";
import ResourceVideoPreview from "./ResourceVideoPreview";

interface ResourceRowProps {
  item: ResourceItem;
  /** Draws the closing hairline on the final row. */
  last?: boolean;
}

export default function ResourceRow({ item, last = false }: ResourceRowProps) {
  return (
    <article
      id={item.key}
      data-screen-label={`Resource: ${item.title}`}
      className={`grid grid-cols-1 items-start gap-8 border-t border-black/10 px-1 py-12 md:grid-cols-[64px_280px_1fr] md:gap-10 ${
        last ? "border-b border-black/10" : ""
      }`}
    >
      <span className="pt-1.5 text-[14px] font-medium tabular-nums text-black/35">
        {item.num}
      </span>

      {/* Visuals: PDF cover always; walkthrough video tile when the resource has one. */}
      <div className="flex flex-col gap-6">
        <ResourceCoverPreview src={item.cover} title={item.title} />
        {item.video && (
          <ResourceVideoPreview video={item.video} title={item.title} />
        )}
      </div>

      <div>
        <h2 className="mb-2.5 text-[26px] font-semibold tracking-[-0.015em] text-black">
          {item.title}
        </h2>
        <p className="mb-5 text-[18px] leading-[1.5] text-black">{item.promise}</p>
        <p className="mb-6 text-[15px] leading-relaxed text-[#6b7280]">
          <strong className="font-semibold text-black">Who it is for:</strong>{" "}
          {item.who}
        </p>

        <ul className="m-0 mb-7 flex list-none flex-col gap-3 p-0">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[15px] leading-[1.55] text-[#4b5563]">
              <Check size={18} className="mt-0.5 shrink-0 text-black" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={item.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundClick(item.driveUrl, `resource_${item.key}`, {
                source: "resources_page",
              })
            }
            className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-7 text-[15px] font-medium text-white transition-[opacity,transform] duration-200 ease-out hover:opacity-90 active:scale-[0.96] active:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span className="relative">
              Get it on Drive
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-200 ease-out group-hover:scale-x-100 group-active:scale-x-100"
              />
            </span>
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-1 group-active:translate-x-1"
            />
          </a>
          <span className="text-[13px] text-[#767676]">In the pack: {item.pack}</span>
        </div>
      </div>
    </article>
  );
}
