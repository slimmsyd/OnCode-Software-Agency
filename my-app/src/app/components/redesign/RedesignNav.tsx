"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay if the viewport grows past the lg breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          scrolled
            ? "mt-3 h-16 max-w-[1200px] rounded-full bg-white px-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 mx-4 lg:mx-auto"
            : "mt-0 h-24 max-w-[1400px] bg-transparent px-6"
        }`}
      >
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
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center text-black lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <button
          onClick={bookAudit}
          className="h-10 rounded-full bg-black px-[22px] text-[15px] font-medium text-white transition-opacity duration-200 hover:opacity-90"
        >
          Book the Audit
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white px-6 pb-6 pt-24 lg:hidden">
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
