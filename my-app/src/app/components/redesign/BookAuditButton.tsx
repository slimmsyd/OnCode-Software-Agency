"use client";

import { ChevronRight } from "lucide-react";
import { bookAudit } from "./lib";

interface BookAuditButtonProps {
  label?: string;
  onClick?: () => void;
}

// Pill CTA matching the existing site's "arrow chip slide" hover. Opens cal.com.
export default function BookAuditButton({
  label = "Book the Audit",
  onClick = bookAudit,
}: BookAuditButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-8 text-[15px] font-medium text-white transition-transform duration-300 active:scale-[0.98]"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {label}
      </span>
      <i className="absolute right-1 top-1 bottom-1 z-10 grid w-1/4 place-items-center rounded-full bg-white/15 transition-all duration-500 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </button>
  );
}
