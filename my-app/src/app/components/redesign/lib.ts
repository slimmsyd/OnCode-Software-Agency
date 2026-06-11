// Shared helpers for the homepage redesign.

export const OC_CAL_URL = "https://cal.com/oncode-software-kuxhkk/30min";

// Every "Book the Audit" CTA opens the cal.com scheduling link in a new tab.
export function bookAudit() {
  if (typeof window === "undefined") return;
  window.open(OC_CAL_URL, "_blank", "noopener,noreferrer");
}

// Smooth-scroll to an anchored section with an 88px top offset (nav height).
export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}
