// Shared helpers for the homepage redesign.

import { trackCtaClick, trackNavClick } from "@/lib/analytics";

// Canonical scheduling link for emails, socials, and any external page.
// On the homepage, CTAs scroll to the inline booking section instead.
export const OC_CAL_URL = "https://cal.com/oncode-software-kuxhkk/30min";

// Founder Substack (PromptimusPrime) — writing + essays.
export const SUBSTACK_URL = "https://substack.com/@promptimusprime";

// Every "Book the Audit" CTA scrolls to the inline booking section.
export function bookAudit(source = "book_audit") {
  if (typeof window === "undefined") return;
  trackCtaClick("book_audit", { source });
  scrollToId("book");
}

// Smooth-scroll to an anchored section with an 88px top offset (nav height).
export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  trackNavClick(id, { action: "scroll" });
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}
