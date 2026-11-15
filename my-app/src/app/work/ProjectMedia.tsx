"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { WorkProject } from "./projects";

type ProjectMediaSource = Pick<
  WorkProject,
  "title" | "media" | "mediaPoster" | "mediaType"
>;

interface ProjectMediaProps {
  project: ProjectMediaSource;
  /** Responsive sizes hint for the image optimizer. */
  sizes: string;
  /** Classes for the media element itself; the parent owns the box. */
  className?: string;
  priority?: boolean;
}

/**
 * Draws a project's media inside whatever positioned box the parent provides.
 * Videos stay muted and only play while on screen, and hold their poster frame
 * when the visitor asked for reduced motion.
 */
export default function ProjectMedia({
  project,
  sizes,
  className = "",
  priority = false,
}: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isVideo = project.mediaType === "video";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isVideo, prefersReducedMotion]);

  if (!isVideo) {
    return (
      <Image
        src={project.media}
        alt={project.title}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        draggable={false}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      poster={project.mediaPoster}
      autoPlay={!prefersReducedMotion}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={`${project.title} walkthrough`}
    >
      <source src={project.media} type="video/mp4" />
    </video>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}
