"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  username: string;
  body: string;
  /** When set, reviewer name links out (SEO entity signal + credibility) */
  url?: string;
  className?: string;
}

export default function ReviewCard({
  name,
  username,
  body,
  url,
  className,
}: ReviewCardProps) {
  const nameClassName =
    "text-sm font-semibold text-gray-900 dark:text-white";

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        className
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white"
          aria-hidden
        >
          {name.charAt(0)}
        </div>
        <div className="flex min-w-0 flex-col">
          <figcaption className={nameClassName}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  nameClassName,
                  "cursor-pointer underline-offset-2 transition-colors duration-200",
                  "hover:text-gray-700 hover:underline",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 focus-visible:ring-offset-2",
                  "dark:hover:text-gray-200 dark:focus-visible:ring-white/40"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {name}
              </a>
            ) : (
              name
            )}
          </figcaption>
          <div className="flex items-center gap-1">
            <p className="text-[10px] font-medium uppercase tracking-tight text-gray-500">
              {username}
            </p>
            <div className="flex text-yellow-500" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 fill-current" aria-hidden />
              ))}
            </div>
          </div>
        </div>
      </div>
      <blockquote className="mt-4 text-sm italic leading-relaxed text-gray-600 dark:text-gray-300">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
}