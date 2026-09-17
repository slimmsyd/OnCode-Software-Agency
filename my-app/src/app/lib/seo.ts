/**
 * Shared brand + social metadata constants.
 *
 * Every route draws its Open Graph / Twitter image from the same share card so a
 * link drop renders one consistent OnCode surface, and structured data reuses
 * the matching logo. Keep these in sync with `scripts/build-brand-assets.py`.
 *
 * Note: Next replaces a page's `openGraph` object wholesale, so a page that sets
 * its own `openGraph` drops the layout image. Build page blocks with
 * `buildOpenGraph()` so the share card is always attached.
 */

import type { Metadata } from "next";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export const SITE_URL = "https://www.0ncode.com";
export const SITE_NAME = "OnCode Software Agency";

/** 1200x630 social share card built from the ornate emblem. */
export const OG_IMAGE = {
  url: `${SITE_URL}/images/og-image.png`,
  width: 1200,
  height: 630,
  alt: "OnCode, from idea to implementation, we keep you OnCode",
} as const;

/** Horizontal wordmark on white, for JSON-LD `logo` / publisher logo fields. */
export const SCHEMA_LOGO = {
  url: `${SITE_URL}/images/oncode-logo.png`,
  width: 1200,
  height: 300,
} as const;

/** Open Graph defaults every route inherits. Pass overrides for per-page copy. */
export function buildOpenGraph(overrides: OpenGraph = {}): OpenGraph {
  return {
    type: "website",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    ...overrides,
  };
}
