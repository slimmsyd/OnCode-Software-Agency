"use client";

import { useCallback, useEffect, useState } from "react";
import { DEFAULT_NEWSLETTER_DESIGN, type NewsletterDesignId } from "@/lib/newsletter";
import {
  NEWSLETTER_OPEN_EVENT,
  markNewsletterPopupShown,
  recordNewsletterDismissal,
  shouldShowNewsletterPopup,
} from "@/lib/newsletter-storage";
import NewsletterModal from "./NewsletterModal";
import { getNewsletterDesign } from "./designs";

/** Tuning knobs. Deliberately conservative: a newsletter popup is a guest, not a gate. */
export const POPUP_TRIGGER = {
  dwellMs: 15000,
  dwellMsOnTouch: 25000,
  scrollDepth: 0.55,
  exitIntent: true,
  /** If the intro film is still playing, start counting only after it ends. */
  introFallbackMs: 20000,
};

/** Pages where a subscribe popup would compete with the page's own job. */
const EXCLUDED_PATH_PREFIXES = [
  "/newsletter-preview",
  "/onboarding",
  "/contact",
];

interface NewsletterPopupProps {
  design?: NewsletterDesignId;
  enabled?: boolean;
}

function isExcludedPath(): boolean {
  const { pathname } = window.location;
  return EXCLUDED_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function isTouchDevice(): boolean {
  return window.matchMedia("(hover: none)").matches;
}

/**
 * Decides when the popup is allowed to appear: after a dwell, a scroll depth,
 * or an exit-intent move, whichever comes first — and never during the intro film.
 */
export default function NewsletterPopup({
  design = DEFAULT_NEWSLETTER_DESIGN,
  enabled = true,
}: NewsletterPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeDesign = getNewsletterDesign(design);
  const Dialog = activeDesign.Dialog;

  const dismiss = useCallback(() => {
    recordNewsletterDismissal();
    setIsOpen(false);
  }, []);

  // Footer links and nav items can summon the same dialog.
  useEffect(() => {
    const handleOpenRequest = () => setIsOpen(true);
    window.addEventListener(NEWSLETTER_OPEN_EVENT, handleOpenRequest);
    return () =>
      window.removeEventListener(NEWSLETTER_OPEN_EVENT, handleOpenRequest);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    if (isExcludedPath()) return;
    if (!shouldShowNewsletterPopup()) return;

    let cancelled = false;
    let stopTriggers = () => {};

    const show = () => {
      if (cancelled || !shouldShowNewsletterPopup()) return;
      markNewsletterPopupShown();
      setIsOpen(true);
      stopTriggers();
    };

    const startTriggers = () => {
      if (cancelled) return;
      const dwell = window.setTimeout(
        show,
        isTouchDevice()
          ? POPUP_TRIGGER.dwellMsOnTouch
          : POPUP_TRIGGER.dwellMs,
      );

      const handleScroll = () => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        if (window.scrollY / scrollable >= POPUP_TRIGGER.scrollDepth) show();
      };

      const handleMouseOut = (event: MouseEvent) => {
        if (!POPUP_TRIGGER.exitIntent) return;
        if (event.clientY > 0 || event.relatedTarget) return;
        show();
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("mouseout", handleMouseOut);

      stopTriggers = () => {
        window.clearTimeout(dwell);
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mouseout", handleMouseOut);
      };
    };

    // Never stack the popup on top of the first-visit intro film.
    if (document.documentElement.getAttribute("data-intro") === "on") {
      const observer = new MutationObserver(() => {
        if (document.documentElement.getAttribute("data-intro") === "on") return;
        observer.disconnect();
        startTriggers();
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-intro"],
      });
      const fallback = window.setTimeout(() => {
        observer.disconnect();
        startTriggers();
      }, POPUP_TRIGGER.introFallbackMs);

      stopTriggers = () => {
        observer.disconnect();
        window.clearTimeout(fallback);
      };
    } else {
      startTriggers();
    }

    return () => {
      cancelled = true;
      stopTriggers();
    };
  }, [enabled]);

  return (
    <NewsletterModal
      isOpen={isOpen}
      onClose={dismiss}
      labelledBy={activeDesign.titleId}
    >
      <Dialog onClose={dismiss} source="popup" />
    </NewsletterModal>
  );
}
