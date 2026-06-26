"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { bookAudit } from "./lib";

const DISMISS_KEY = "oc-sticky-audit-dismissed";

export default function StickyAuditBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(DISMISS_KEY);
    if (stored === "1") setDismissed(true);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  if (!visible || dismissed) return null;

  return (
    <>
      <div
        role="region"
        aria-label="Book audit call to action"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/[0.92] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md motion-reduce:transition-none sm:px-6"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4">
          <p className="hidden text-[14px] font-light leading-snug text-[#4b5563] sm:block">
            Find your leak — two-week audit, fee credits to your build.
          </p>
          <p className="text-[13px] font-light leading-snug text-[#4b5563] sm:hidden">
            Two-week audit. Fee credits to your build.
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={bookAudit}
              className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-black px-6 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#111111]"
            >
              Book the Audit
            </button>
            <button
              onClick={dismiss}
              aria-label="Dismiss sticky call to action"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[#6b7280] transition-colors duration-200 hover:bg-black/5 hover:text-black"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}