import type { Metadata } from "next";
import ResourcesPage from "../components/redesign/resources/ResourcesPage";
import JsonLd from "../components/JsonLd";
import { RESOURCES } from "../components/redesign/resources/resources-data";

export const metadata: Metadata = {
  title: "Resources — Free Agent Skills & Templates",
  description:
    "Free agent skills, templates and Drive setups from OnCode. No email required: Client Proposal Creator, Inbox Email Triage, Standards Vault, Agency GA Reporter, Solicitation Quick Reference, and more.",
  alternates: { canonical: "https://www.0ncode.com/resources" },
  openGraph: {
    type: "website",
    url: "https://www.0ncode.com/resources",
    title: "OnCode Resources — Free Agent Skills & Templates",
    description:
      "Free agent skills, templates and Drive setups. No email required.",
  },
};

// ItemList so answer engines can enumerate the giveaways. Mirrors RESOURCES
// exactly — do not hand-maintain a second copy of this list.
function buildResourcesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OnCode Resources",
    description: "Free agent skills, templates and Drive setups from OnCode.",
    itemListElement: RESOURCES.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: r.title,
        description: r.promise,
        url: `https://www.0ncode.com/resources#${r.key}`,
        isAccessibleForFree: true,
        provider: { "@type": "Organization", name: "OnCode Software Agency" },
      },
    })),
  };
}

export default function Page() {
  return (
    <>
      <JsonLd data={buildResourcesSchema()} />
      <ResourcesPage />
    </>
  );
}
