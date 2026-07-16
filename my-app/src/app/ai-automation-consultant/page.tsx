import type { Metadata } from "next";
import JsonLd, { buildFaqPageSchema } from "../components/JsonLd";
import AutomationConsultantPage from "../components/redesign/aeo/AutomationConsultantPage";
import { CONSULTANT_FAQ } from "../components/redesign/aeo/faq-consultant";

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
    "business process automation",
    "AI automation firm",
    "enterprise automation",
    "Northern Virginia AI automation",
    "DMV automation consultant",
    "OnCode",
  ],
  openGraph: {
    title: `${title} | OnCode`,
    description,
    url,
    type: "website",
    siteName: "OnCode Software Agency",
    images: [
      {
        url: "https://www.0ncode.com/Personal/OnCodeShareImage.png",
        width: 1200,
        height: 630,
        alt: "OnCode AI automation consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | OnCode`,
    description,
    images: ["https://www.0ncode.com/Personal/OnCodeShareImage.png"],
  },
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OnCode",
  url: "https://www.0ncode.com",
  description,
  areaServed: [
    "Fredericksburg, VA",
    "Alexandria, VA",
    "Arlington, VA",
    "Lorton, VA",
    "Fairfax, VA",
    "Tysons, VA",
    "Reston, VA",
    "United States",
  ],
  serviceType: "AI automation consulting",
};

export default function AiAutomationConsultantRoute() {
  return (
    <>
      <JsonLd data={buildFaqPageSchema(CONSULTANT_FAQ)} />
      <JsonLd data={organizationSchema} />
      <AutomationConsultantPage />
    </>
  );
}
