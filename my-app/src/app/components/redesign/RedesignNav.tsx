"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { bookAudit, scrollToId } from "./lib";

const NAV_ITEMS = [
  { label: "The Audit", id: "audit" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "Founder", id: "founder" },
];

export default function RedesignNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
          aria-label="OnCode — back to top"
        >
          <Image
            src="/redesign/oncode-wordmark.png"
            alt="OnCode"
            width={785}
            height={314}
            priority
            className="h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollToId(it.id)}
              className="px-1 py-2 text-[15px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
            >
              {it.label}
            </button>
          ))}
          <span className="h-6 w-px bg-black/10" />
          <button
            onClick={bookAudit}
            className="h-10 rounded-full bg-black px-[22px] text-[15px] font-medium text-white transition-opacity duration-200 hover:opacity-90"
          >
            Book the Audit
          </button>
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center text-black lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white px-6 pb-6 pt-24">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-black"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((it) => (
              <button
                key={it.id}
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => scrollToId(it.id), 60);
                }}
                className="text-left text-2xl font-medium text-[#4b5563]"
              >
                {it.label}
              </button>
            ))}
          </div>
          <div className="mb-12 mt-auto">
            <button
              onClick={bookAudit}
              className="h-12 w-full rounded-full bg-black text-lg font-medium text-white"
            >
              Book the Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
