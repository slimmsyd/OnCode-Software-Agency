/**
 * Shared Organization / ProfessionalService JSON-LD for AEO & entity clarity.
 * Hero copy stays national; geo lives here + FAQ schema for local queries.
 */

const BASE_URL = "https://www.0ncode.com";
const LOGO_URL = `${BASE_URL}/Personal/OnCodeShareImage.png`;
const DESCRIPTION =
  "OnCode is an AI automation firm and software agency. We find where businesses leak time and money, then build custom automations, software, and sites — starting with a paid diagnostic audit and one workflow at a time.";

/** City / metro nodes machines can resolve for local + DMV intent. */
function city(
  name: string,
  region: string,
  country = "US"
): Record<string, unknown> {
  return {
    "@type": "City",
    name,
    containedInPlace: {
      "@type": "State",
      name: region,
      containedInPlace: {
        "@type": "Country",
        name: country,
      },
    },
  };
}

function state(name: string): Record<string, unknown> {
  return {
    "@type": "State",
    name,
    containedInPlace: {
      "@type": "Country",
      name: "US",
    },
  };
}

function administrativeArea(name: string): Record<string, unknown> {
  return {
    "@type": "AdministrativeArea",
    name,
    containedInPlace: {
      "@type": "Country",
      name: "US",
    },
  };
}

/** Primary service area: DMV + national remote. */
export const AREA_SERVED: Record<string, unknown>[] = [
  administrativeArea("DMV (Washington DC, Maryland, Virginia)"),
  {
    "@type": "City",
    name: "Washington",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "District of Columbia",
      containedInPlace: { "@type": "Country", name: "US" },
    },
  },
  state("Virginia"),
  state("Maryland"),
  city("Fredericksburg", "Virginia"),
  city("Alexandria", "Virginia"),
  city("Arlington", "Virginia"),
  city("Lorton", "Virginia"),
  city("Fairfax", "Virginia"),
  city("Tysons", "Virginia"),
  city("Reston", "Virginia"),
  city("Bethesda", "Maryland"),
  city("Silver Spring", "Maryland"),
  {
    "@type": "Country",
    name: "United States",
  },
];

const SAME_AS = [
  "https://substack.com/@promptimusprime",
  "https://0ncode.substack.com/",
  "https://x.com/OnCodeAgency",
  "https://cal.com/oncode-software-kuxhkk/30min",
];

const KNOWS_ABOUT = [
  "AI automation",
  "business process automation",
  "AI automation consulting",
  "AI automation agency",
  "custom software development",
  "workflow automation",
  "diagnostic AI audit",
  "lead follow-up automation",
  "missed-call text-back",
  "DMV AI automation",
  "Northern Virginia AI automation",
];

/**
 * Site-wide entity: ProfessionalService so crawlers/AIs treat OnCode as a
 * localizable service business, not only a generic website.
 */
export function buildOrganizationSchema(
  overrides: Record<string, unknown> = {}
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    name: "OnCode",
    legalName: "OnCode Software Agency",
    alternateName: ["OnCode Agency", "0ncode", "Oncode"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 1200,
      height: 630,
    },
    image: LOGO_URL,
    description: DESCRIPTION,
    slogan: "From idea to implementation — we keep you OnCode.",
    foundingLocation: {
      "@type": "Place",
      name: "Fredericksburg, Virginia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fredericksburg",
        addressRegion: "VA",
        addressCountry: "US",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fredericksburg",
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: AREA_SERVED,
    serviceType: [
      "AI automation consulting",
      "AI automation agency",
      "Business process automation",
      "Custom software development",
      "Web application development",
    ],
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://cal.com/oncode-software-kuxhkk/30min",
        availableLanguage: ["English"],
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: `${BASE_URL}/contact`,
        availableLanguage: ["English"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "OnCode services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diagnostic Audit",
            description:
              "Paid diagnostic that maps time and money leaks, then prioritizes automations and systems to fix them.",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: AREA_SERVED,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation Build",
            description:
              "Custom, output-driven automations shipped one workflow at a time: lead follow-up, missed-call text-back, intake, invoicing, reporting.",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: AREA_SERVED,
            serviceType: "AI automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software & Web Applications",
            description:
              "Sites and software when operations need them, managed after launch.",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: AREA_SERVED,
          },
        },
      ],
    },
    ...overrides,
  };
}

/**
 * Service-focused graph for the AI automation consultant landing page.
 * Includes Organization + Service + WebPage so the page answers category queries.
 */
export function buildAutomationConsultantSchema(
  pageUrl: string,
  pageDescription: string
): Record<string, unknown> {
  const org = buildOrganizationSchema({
    description: pageDescription,
    serviceType: [
      "AI automation consulting",
      "AI automation agency",
      "Business process automation",
    ],
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "AI Automation Consulting",
        alternateName: [
          "AI automation agency",
          "AI automation consultant",
          "Business automation consulting",
        ],
        serviceType: "AI automation consulting",
        description: pageDescription,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: AREA_SERVED,
        url: pageUrl,
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Small and mid-size businesses with operational volume",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Best AI Automation Consultant | OnCode",
        description: pageDescription,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          name: "OnCode",
          url: BASE_URL,
        },
        about: { "@id": `${pageUrl}#service` },
        mainEntity: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}
