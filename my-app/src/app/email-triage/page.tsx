import type { Metadata } from "next";
import JsonLd, { buildFaqPageSchema } from "../components/JsonLd";
import EmailTriageArticle from "../components/redesign/aeo/EmailTriageArticle";
import { EMAIL_TRIAGE_FAQ } from "../components/redesign/aeo/email-triage-faq";
import { buildOpenGraph, OG_IMAGE, SITE_URL } from "../lib/seo";

const title = "Email triage for a facilities company";
const description =
  "How to set up an email triage agent for a facilities maintenance company that holds government work. One skill, a 20-thread inbox, and no sending.";
const url = `${SITE_URL}/email-triage`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "email triage agent",
    "facilities maintenance email",
    "government contractor inbox",
    "Gmail MCP",
    "inbox organization skill",
    "OnCode",
  ],
  openGraph: buildOpenGraph({
    title: `${title} | OnCode`,
    description,
    url,
    type: "article",
    images: [{ ...OG_IMAGE, alt: "OnCode email triage for facilities companies" }],
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

function articleSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to set up email triage for a facilities company",
    description,
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: "Sydney Sanders",
      url: "https://www.linkedin.com/in/sydney-sanders-engineer/",
    },
    publisher: {
      "@type": "Organization",
      name: "OnCode",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/oncode-logo.png`,
      },
    },
    image: [
      `${SITE_URL}/articles/email-triage/01-create-bot.png`,
      `${SITE_URL}/articles/email-triage/06-clean-inbox.png`,
    ],
  };
}

export default function EmailTriageRoute() {
  return (
    <>
      <JsonLd data={buildFaqPageSchema(EMAIL_TRIAGE_FAQ)} />
      <JsonLd data={articleSchema()} />
      <EmailTriageArticle />
    </>
  );
}
