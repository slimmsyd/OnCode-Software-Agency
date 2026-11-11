import type { Metadata } from "next";
import { buildOpenGraph, SITE_URL } from "@/app/lib/seo";
import NewsletterPageClient from "./NewsletterPageClient";

const TITLE = "Field notes on applied AI";
const DESCRIPTION =
  "Twice a month, straight from the work itself: what we shipped, what broke on the way, and the number that moved after. Join the OnCode newsletter.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/newsletter` },
  openGraph: buildOpenGraph({
    locale: "en_US",
    url: `${SITE_URL}/newsletter`,
    title: TITLE,
    description: DESCRIPTION,
  }),
};

export default function NewsletterPage() {
  return <NewsletterPageClient />;
}
