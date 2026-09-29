import type { Metadata } from "next";
import LocalBusinessPage from "../components/redesign/aeo/LocalBusinessPage";
import { buildOpenGraph, OG_IMAGE, SITE_URL } from "../lib/seo";

const title = "AI automation for local businesses";
const description =
  "OnCode builds AI automation for local businesses in Washington, Maryland, and Virginia. A paid diagnostic, then one workflow at a time.";
const url = `${SITE_URL}/ai-automation-local-business`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI automation for local businesses",
    "DMV AI automation",
    "Washington DC AI automation",
    "Northern Virginia AI automation",
    "Maryland business automation",
    "OnCode",
  ],
  openGraph: buildOpenGraph({
    title: `${title} | OnCode`,
    description,
    url,
    images: [{ ...OG_IMAGE, alt: "OnCode AI automation for local businesses" }],
  }),
  twitter: {
    card: "summary_large_image",
    title: `${title} | OnCode`,
    description,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: url },
  robots: { index: true, follow: true },
};

export default function AiAutomationLocalBusinessRoute() {
  return <LocalBusinessPage />;
}
