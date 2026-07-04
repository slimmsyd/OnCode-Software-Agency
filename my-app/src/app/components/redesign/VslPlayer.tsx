"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import {
  trackVslComplete,
  trackVslPlay,
  trackVslProgress,
} from "@/lib/analytics";

type VslPlayerProps = {
  className?: string;
};

const VSL_VIDEO = "vsl-enhanced";
const PROGRESS_MILESTONES = [25, 50, 75] as const;

export default function VslPlayer({ className = "" }: VslPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const hasTrackedPlay = useRef(false);
  const trackedMilestones = useRef(new Set<number>());

  const resetTracking = () => {
    hasTrackedPlay.current = false;
    trackedMilestones.current.clear();
  };

  const handlePlayStart = () => {
    setHasStarted(true);
    if (hasTrackedPlay.current) return;
    hasTrackedPlay.current = true;
    trackVslPlay(VSL_VIDEO);
  };

  const handleEnded = () => {
    setHasStarted(false);
    trackVslComplete(VSL_VIDEO);
    resetTracking();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!duration || !Number.isFinite(duration)) return;

      const percent = (currentTime / duration) * 100;
      for (const milestone of PROGRESS_MILESTONES) {
        if (percent >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          trackVslProgress(VSL_VIDEO, milestone);
        }
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;

    try {
      await video.play();
      handlePlayStart();
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
          onPlay={handlePlayStart}
          onEnded={handleEnded}
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