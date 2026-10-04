"use client";

import type { MouseEvent } from "react";
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
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (onClick) {
      onClick();
      return;
    }
    bookAudit(source);
  }

  return (
    <a
      href="/#book"
      onClick={handleClick}
      className={tone === "dark" ? sharpButtonOnDarkClass : sharpButtonClass}
    >
      {label}
    </a>
  );
}
