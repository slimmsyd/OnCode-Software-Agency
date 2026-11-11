"use client";

import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useDialogA11y } from "./useDialogA11y";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** id of the heading inside the active design. */
  labelledBy: string;
  children: ReactNode;
}

/**
 * Portal + backdrop + a11y shell. The design components own their own motion;
 * this only decides whether the dialog exists and where focus goes.
 */
export default function NewsletterModal({
  isOpen,
  onClose,
  labelledBy,
  children,
}: NewsletterModalProps) {
  const [portalReady, setPortalReady] = useState(false);
  const reduceMotion = useReducedMotion();
  // The dialog only exists after the portal mounts, so the trap waits for it.
  const dialogRef = useDialogA11y<HTMLDivElement>({
    isOpen: isOpen && portalReady,
    onClose,
  });

  useEffect(() => {
    setPortalReady(true);
  }, []);

  if (!portalReady) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] overflow-y-auto overscroll-contain">
          <motion.div
            key="newsletter-backdrop"
            aria-hidden="true"
            onMouseDown={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
          />

          <div className="relative flex min-h-full items-center justify-center p-3 sm:p-6">
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelledBy}
              className="relative max-h-[calc(100dvh-1.5rem)] w-full overflow-y-auto outline-none"
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
