"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import BookAuditButton from "./BookAuditButton";

export default function VslSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      video.controls = true;
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="vsl"
      data-screen-label="VSL"
      className="border-t border-black/10 bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center">
          <p className="mb-4 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            Watch
          </p>
          <h2
            className="text-[#111]"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            How we find where your business leaks time and money
          </h2>
          <p
            className="mx-auto mt-4 font-light text-[#6b7280]"
            style={{ maxWidth: 560, fontSize: 17, lineHeight: 1.6 }}
          >
            A short walkthrough of the AI Diagnostic Audit: what we look for,
            what you get back, and why clients start here before any build.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-[#0a0a0a] shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              controls={isPlaying}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              aria-label="OnCode AI Diagnostic Audit video sales letter"
            >
              <source src="/redesign/vsl-enhanced.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-colors duration-200 hover:bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Play video"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <BookAuditButton source="vsl" />
        </div>
      </div>
    </section>
  );
}