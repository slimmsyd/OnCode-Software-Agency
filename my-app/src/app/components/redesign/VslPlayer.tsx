"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type VslPlayerProps = {
  className?: string;
};

export default function VslPlayer({ className = "" }: VslPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;

    try {
      await video.play();
      setHasStarted(true);
    } catch {
      // Autoplay policy blocked programmatic play — leave controls visible.
      setHasStarted(true);
    }
  };

  return (
    <div
      className={`relative z-10 w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-[#0a0a0a] shadow-[0_8px_32px_rgba(0,0,0,0.1)] ${className}`}
    >
      <div className="relative aspect-video w-full bg-[#0a0a0a]">
        <video
          ref={videoRef}
          className={`absolute inset-0 z-0 h-full w-full object-contain ${
            hasStarted ? "pointer-events-auto" : "pointer-events-none"
          }`}
          controls={hasStarted}
          playsInline
          preload="metadata"
          onPlay={() => setHasStarted(true)}
          onEnded={() => setHasStarted(false)}
          aria-label="OnCode AI Diagnostic Audit video sales letter"
        >
          <source src="/redesign/vsl-enhanced.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!hasStarted && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 z-30 flex cursor-pointer items-center justify-center bg-black/20 transition-colors duration-200 hover:bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Play video"
          >
            <span className="pointer-events-none flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}