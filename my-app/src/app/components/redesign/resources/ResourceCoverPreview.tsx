"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ResourceCoverPreviewProps {
  src: string;
  title: string;
}

/** US Letter ratio from cover exports (520 × 672). */
const COVER_RATIO = 520 / 672;

export default function ResourceCoverPreview({
  src,
  title,
}: ResourceCoverPreviewProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Preview ${title} PDF`}
        aria-haspopup="dialog"
        className="group relative h-[336px] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-black/[0.12] bg-white transition-[border-color] duration-200 hover:border-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:h-[336px] md:w-[260px] md:max-w-none"
      >
        <Image
          src={src}
          alt={`${title}, PDF cover`}
          fill
          sizes="(max-width: 768px) 100vw, 260px"
          className="object-contain object-top p-1"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent pb-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-medium text-black">
            <ZoomIn size={14} />
            Preview
          </span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} preview`}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          onClick={close}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
          />

          <div
            className="oc-preview-in relative z-10 flex w-full max-w-[min(920px,96vw)] flex-col items-center"
            style={{
              maxHeight: "92vh",
              width: `min(920px, calc(92vh * ${COVER_RATIO}))`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close preview"
              className="absolute -right-1 -top-11 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70 sm:-right-2 sm:-top-12"
            >
              <X size={18} aria-hidden />
            </button>

            <div className="flex max-h-[88vh] w-full flex-col overflow-hidden rounded-2xl border border-black/[0.12] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <Image
                  src={src}
                  alt={`${title}, full preview`}
                  width={920}
                  height={Math.round(920 / COVER_RATIO)}
                  unoptimized
                  priority
                  className="block h-auto w-full"
                />
              </div>
            </div>

            <p className="mt-3 shrink-0 text-center text-[14px] font-medium text-white/90">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
