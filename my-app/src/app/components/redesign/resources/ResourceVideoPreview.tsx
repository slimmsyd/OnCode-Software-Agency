"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";
import type { ResourceVideo } from "./resources-data";

interface ResourceVideoPreviewProps {
  video: ResourceVideo;
  title: string;
}

/**
 * Click-to-play YouTube preview tile. The iframe only mounts after the user
 * opens the modal — no YouTube scripts load on page render.
 */
export default function ResourceVideoPreview({
  video,
  title,
}: ResourceVideoPreviewProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(() => {
    trackCtaClick(`resource_video_${video.youtubeId}`, {
      source: "resources_page",
    });
    setOpen(true);
  }, [video.youtubeId]);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        aria-label={`Play ${title} walkthrough video`}
        aria-haspopup="dialog"
        className="group relative block w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-black/[0.12] bg-black transition-[border-color] duration-200 hover:border-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:w-[260px] md:max-w-none"
      >
        {/* YouTube's own thumbnail, so the tile never drifts from the video. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={`${title}, video walkthrough thumbnail`}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full object-cover opacity-90 transition-opacity duration-200 group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-black shadow-md transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95">
            <Play size={18} className="ml-0.5 fill-current" />
          </span>
        </span>
        {video.duration && (
          <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-white">
            {video.duration}
          </span>
        )}
      </button>
      <p className="mt-2.5 w-full max-w-[320px] text-[13px] text-[#767676] md:w-[260px] md:max-w-none">
        {video.label}
      </p>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} video walkthrough`}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          onClick={close}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
          />

          <div
            className="oc-preview-in relative z-10 w-full max-w-[min(960px,96vw)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute -right-1 -top-11 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70 sm:-right-2 sm:-top-12"
            >
              <X size={18} aria-hidden />
            </button>

            <div className="overflow-hidden rounded-2xl border border-black/[0.12] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={`${title} video walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="block h-full w-full border-0"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-[14px] font-medium text-white/90">{title}</p>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[13px] font-medium text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
