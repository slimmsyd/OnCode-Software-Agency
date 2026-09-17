import type { Metadata } from "next";
import JsonLd, { buildFaqPageSchema } from "../components/JsonLd";
import AutomationConsultantPage from "../components/redesign/aeo/AutomationConsultantPage";
import { CONSULTANT_FAQ } from "../components/redesign/aeo/faq-consultant";
import { buildAutomationConsultantSchema } from "../lib/organization-schema";
import { buildOpenGraph, OG_IMAGE } from "../lib/seo";

const title = "Best AI Automation Consultant";
const description =
  "OnCode is an AI automation firm that builds custom, output-driven automations for businesses with real operations to protect. Start with a paid diagnostic audit, then ship one workflow at a time.";
const url = "https://www.0ncode.com/ai-automation-consultant";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI automation consultant",
    "best AI automation consultant",
    "AI automation agency",
    "business process automation",
    "AI automation firm",
    "enterprise automation",
    "Northern Virginia AI automation",
    "DMV AI automation agency",
    "DMV automation consultant",
    "Washington DC AI automation",
    "OnCode",
  ],
  openGraph: buildOpenGraph({
    title: `${title} | OnCode`,
    description,
    url,
    images: [{ ...OG_IMAGE, alt: "OnCode AI automation consultant" }],
  }),
  twitter: {
    card: "summary_large_image",
    title: `${title} | OnCode`,
    description,
    images: [OG_IMAGE.url],
  },
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AiAutomationConsultantRoute() {
  return (
    <>
      <JsonLd data={buildFaqPageSchema(CONSULTANT_FAQ)} />
      <JsonLd data={buildAutomationConsultantSchema(url, description)} />
      <AutomationConsultantPage />
    </>
  );
}
