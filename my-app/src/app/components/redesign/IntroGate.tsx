"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "oncode-intro-seen";
const FADE_MS = 420;

function hasSeenIntro(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return true;
  }
}

function markIntroSeen(): void {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* Private browsing can block storage. The site still opens. */
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function IntroGate() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const leavingRef = useRef(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (hasSeenIntro() || prefersReducedMotion()) {
      root.removeAttribute("data-intro");
      setRemoved(true);
      return;
    }

    root.setAttribute("data-intro", "on");
    const video = videoRef.current;
    const stuck = window.setTimeout(openSite, 12000);
    if (!video) return () => window.clearTimeout(stuck);

    const onEnded = () => openSite();
    video.addEventListener("ended", onEnded);

    if (video.ended) openSite();
    else startAutoplay(video);

    return () => {
      window.clearTimeout(stuck);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  function startAutoplay(video: HTMLVideoElement) {
    video.volume = 1;
    video.muted = true;
    const trySound = () => {
      video.muted = false;
    };
    const play = () => {
      const attempt = video.play();
      if (!attempt) return;
      attempt.then(trySound).catch(() => {
        video.muted = true;
        video.play().catch(() => openSite());
      });
    };
    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });
  }

  function openSite() {
    if (leavingRef.current) return;
    leavingRef.current = true;
    markIntroSeen();
    document.getElementById("intro-gate")?.classList.add("is-leaving");
    window.setTimeout(() => {
      document.documentElement.removeAttribute("data-intro");
      setRemoved(true);
    }, FADE_MS);
  }

  if (removed) return null;

  return (
    <div
      id="intro-gate"
      className="intro-gate"
      onClick={openSite}
      role="dialog"
      aria-modal="true"
      aria-label="OnCode introduction. Click to enter the site."
    >
      <video
        ref={videoRef}
        className="intro-gate-video"
        src="/intro/oncode-intro.mp4"
        poster="/intro/oncode-intro-poster.jpg"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={openSite}
        onError={openSite}
      />
    </div>
  );
}
