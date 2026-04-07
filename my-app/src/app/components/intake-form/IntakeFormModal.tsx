"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntakeFormWizard from "./IntakeFormWizard";

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeFormModal({
  isOpen,
  onClose,
}: IntakeFormModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close form"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="px-6 pt-6 pb-2">
              <h2 className="text-xl font-semibold text-black">
                Tell us about your project
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Takes about 2 minutes
              </p>
            </div>

            {/* Wizard */}
            <div className="px-6 pb-6">
              <IntakeFormWizard onClose={onClose} variant="modal" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
