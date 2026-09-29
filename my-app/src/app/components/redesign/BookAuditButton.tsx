"use client";

import { bookAudit } from "./lib";
import { sharpButtonClass, sharpButtonOnDarkClass } from "./sharp-button";

interface BookAuditButtonProps {
  label?: string;
  onClick?: () => void;
  source?: string;
  tone?: "light" | "dark";
}

export default function BookAuditButton({
  label = "Book the Audit",
  onClick,
  source = "book_audit_button",
  tone = "light",
}: BookAuditButtonProps) {
  const handleClick = onClick ?? (() => bookAudit(source));

  return (
    <button
      type="button"
      onClick={handleClick}
      className={tone === "dark" ? sharpButtonOnDarkClass : sharpButtonClass}
    >
      {label}
    </button>
  );
}
