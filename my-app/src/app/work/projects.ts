export interface WorkStory {
  what: string;
  problem: string;
  solution: string;
  /** Matches `reviews.ts` name. Shown only when that person reviewed this client. */
  reviewName?: string;
}

export interface WorkProject {
  key: string;
  media: string;
  title: string;
  kind: string;
  description: string;
  liveUrl?: string;
  mediaFit?: "cover" | "contain";
  story?: WorkStory;
  /** Case-study keys shown in the Related work row on this project's page. */
  relatedKeys?: string[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    key: "obsidian-protocol",
    media: "/redesign/projects/obsidian-protocol.jpeg",
    title: "Obsidian Protocol",
    kind: "Full Application MVP · System Design → Hosting",
    description:
      "Full application MVP in partnership with Alpine Gold Exchange, from system design through hosting for a DeFi tokenization protocol converting 1:1 gold-backed assets into digital tokens on the Solana blockchain.",
    liveUrl: "https://www.w3bs.fun/",
    story: {
      what: "A full-stack product for tokenizing commodities, built with Alpine Gold Exchange on Solana.",
      problem:
        "They had the product idea: turn a physical commodity into a token. They did not have the system that could take that idea from the screen to the chain.",
      solution:
        "OnCode built the infrastructure end to end: the design, the frontend, the Solana program, and the path that tokenizes the asset with Alpine Gold Exchange.",
      reviewName: "Obsidian",
    },
  },
  {
    key: "screwit-pro",
    media: "/redesign/projects/screwitpro.jpg",
    title: "ScrewIt Pros",
    kind: "Full Application MVP · System Design → Hosting",
    description:
      "End-to-end MVP for Houston furniture assembly: system design, UI/UX, full-stack development, hosting, and maintenance. Instant quotes, workshop assembly, and door-to-door delivery.",
    liveUrl: "https://www.screwitpro.com/",
    story: {
      what: "A full-stack web application for a white-glove furniture service in Houston.",
      problem:
        "The startup wanted furniture built at a hub, then delivered back to the customer finished. A brochure could not run that trip.",
      solution:
        "OnCode designed the site and built the infrastructure for the whole lifecycle: the quote, the hub build, and delivery back to the door. We host it and still maintain it.",
    },
  },
  {
    key: "serenity-helping-hands",
    media: "/redesign/projects/serenity-helping-hands.jpg",
    title: "Serenity Helping Hands",
    kind: "Website Design + Development · Hosting",
    description:
      "Full website design, development, and hosting for a veteran-founded, family-owned independent shared housing provider with a story-led site, residence details, and inquiry capture for veterans seeking stable, supportive housing.",
    liveUrl: "https://www.serenityhelpinghandsllc.com/",
    story: {
      what: "The website for Serenity Helping Hands, a veteran-founded shared housing provider.",
      problem:
        "Families looking for stable housing needed a place to understand the residences and start an inquiry. The business needed that same site to bring prospects in.",
      solution:
        "OnCode designed, developed, and hosts the site: the story, the residence details, and a way to capture an inquiry.",
    },
  },
  {
    key: "pruventa",
    media: "/redesign/projects/pruventa.jpg",
    title: "Pruventa",
    kind: "Website Design + Development · Hosting",
    description:
      "Full website design, development, and hosting for a specialty-access infrastructure platform that helps FQHCs, rural clinics, and safety-net organizations deliver specialty care inside the workflows they already use.",
    liveUrl: "https://www.pruventa.com/",
    story: {
      what: "The website for Pruventa, a specialty-access platform for clinics and safety-net organizations.",
      problem:
        "Clinics needed to see what Pruventa does before a sales conversation. Pruventa needed a site that could show the service and catch the next prospect.",
      solution:
        "OnCode designed, developed, and hosts the site so the offer is public and inquiries have a place to land.",
    },
  },
  {
    key: "hoops-2u-dmv",
    media: "/redesign/projects/hoops2u-dmv.jpg",
    title: "Hoops 2u DMV",
    kind: "Web Application · CRM + Booking Automation",
    description:
      "Full web application for a DMV mobile entertainment business: CRM setup, booking automation, event scheduling, and reconciliation, plus end-to-end automation design and development built around their business outcomes. We operated as the full-stack engineer throughout.",
    liveUrl: "https://www.hoops2udmv.com/",
    relatedKeys: ["mcbride", "tint-labs"],
    story: {
      what: "The site and booking system for Hoops 2u DMV, a mobile entertainment business.",
      problem:
        "Events, inquiries, and the schedule lived apart. Prospects needed a way to see the service and book. The business needed those leads in one place.",
      solution:
        "OnCode designed and built the site, the CRM, booking, scheduling, and reconciliation, and stayed on as the engineer for that stack.",
    },
  },
  {
    key: "patriot-media",
    media: "/redesign/projects/patriot-media.jpg",
    title: "Patriot Entertainment & Media Group",
    kind: "Website Design + Development · Hosting",
    description:
      "Full website design, development, and hosting for a DMV-based live entertainment company serving military families and communities with a video-led site, event listings, artist showcases, and booking inquiry capture.",
    liveUrl: "https://www.patriotmediausa.com/",
    relatedKeys: ["new-world-television"],
    story: {
      what: "The website for Patriot Entertainment & Media Group, a live entertainment company in the DMV.",
      problem:
        "Military families and event buyers needed to see the shows and the artists. Patriot needed those visits to turn into a booking inquiry.",
      solution:
        "OnCode designed, developed, and hosts a video-led site with event listings, artist showcases, and inquiry capture.",
    },
  },
  {
    key: "street-economics",
    media: "/redesign/projects/streetecon.webp",
    title: "Street Economics",
    kind: "Digital Infrastructure + CRM",
    description:
      "Full digital infrastructure for a 220+ member economic community with website development, hosting, and CRM setup to power membership, engagement, and growth.",
    relatedKeys: ["hrr-foundation"],
    story: {
      what: "The website and CRM for Street Economics, a community of more than 220 members.",
      problem:
        "A community that size needed a public home and a way to catch the next member. Word of mouth was not a system.",
      solution:
        "OnCode designed and developed the site, set up hosting, and put a CRM under membership and engagement.",
    },
  },
  {
    key: "phaseworks",
    media: "/redesign/projects/phaseworks.jpeg",
    title: "PhaseWorks Engineering",
    kind: "Digital Infrastructure + CRM",
    description:
      "Website design, development, and deployment for an infrastructure engineering firm, plus CRM systems so project delivery and client ops run on one stack.",
    liveUrl: "https://www.phaseworksengineering.com/",
    story: {
      what: "The website and CRM for PhaseWorks Engineering, an infrastructure engineering firm.",
      problem:
        "Prospects needed to see the firm's work. The firm needed new inquiries and live projects to land in the same system.",
      solution:
        "OnCode designed, developed, and deployed the site, then added the CRM so delivery and client work run on one stack.",
      reviewName: "PhaseWorks Engineering",
    },
  },
  {
    key: "pos-extension",
    media: "/redesign/projects/pos-pay-extension.png",
    mediaFit: "contain",
    title: "POS Web Extension",
    kind: "Payments · Browser Extension · Fredericksburg",
    description:
      "Built for a Fredericksburg-area repair shop on a legacy POS. Browser extension reroutes card and ACH through a shop-controlled payment layer so they cut vendor lock-in cost and set their own payment criteria.",
  },
  {
    key: "boxraw",
    media: "/redesign/projects/boxraw.jpeg",
    title: "BoxRaw Labs",
    kind: "Web Application",
    description:
      "Custom web application built for a boxing performance lab to manage training data and coordinate internal team workflows.",
  },
  {
    key: "wepray2flourish",
    media: "/redesign/projects/wepray2flourish.jpeg",
    title: "We Pray To Flourish",
    kind: "Ecommerce + Digital Infrastructure",
    description:
      "Custom CRM, hosting, and digital infrastructure for an author-led brand with an ecommerce site, Stripe payments, book sales, and newsletter growth.",
    story: {
      what: "The site, store, and CRM for We Pray To Flourish, an author-led brand.",
      problem:
        "Readers needed a place to find the books and join the list. The brand needed those prospects captured, not left in a direct message.",
      solution:
        "OnCode built the ecommerce site, Stripe checkout, hosting, newsletter capture, and the CRM behind it.",
    },
  },
  {
    key: "sj-wellness",
    media: "/redesign/projects/sj-wellness.jpeg",
    title: "SJ Wellness",
    kind: "Website",
    description: "Website designed and developed for a wellness center.",
    story: {
      what: "The website for SJ Wellness, a wellness center.",
      problem:
        "People looking for the center needed to see the services and reach out. The business needed that inquiry to come through the site.",
      solution:
        "OnCode designed, developed, and maintains the site so the services are public and prospects can make contact.",
    },
  },
  {
    key: "new-world-television",
    media: "/redesign/projects/new-world-television.jpeg",
    title: "New World Television",
    kind: "Custom Website Design + Development",
    description:
      "Custom website design and development with booking automations and CRM setup for a media network platform.",
    relatedKeys: ["patriot-media"],
    story: {
      what: "The website for New World Television, a media network.",
      problem:
        "The network needed a public face for the programming and a way to take the next booking or lead without chasing it by hand.",
      solution:
        "OnCode designed and developed the site, then added booking automations and a CRM.",
    },
  },
  {
    key: "tint-labs",
    media: "/redesign/projects/tintlabs.jpeg",
    title: "Tint Labs",
    kind: "Website + Booking",
    description:
      "Website, booking, and lead capture for a car-tinting business featured in our case study.",
    relatedKeys: ["hoops-2u-dmv", "mcbride"],
    story: {
      what: "The website and booking system for Tint Labs, a car-tinting shop.",
      problem:
        "268 leads came through in six months. 50 never heard back. Quotes went to the wrong inbox, and weekend inquiries sat until Monday. About $7,000 in work walked away.",
      solution:
        "OnCode built a site that books the work, captures every lead, and drafts the quote for the right vehicle and price within minutes. We launched it in weeks and still manage it.",
    },
  },
  {
    key: "hrr-foundation",
    media: "/redesign/projects/hrr-foundation.png",
    title: "HRR Foundation",
    kind: "CRM Design + Development",
    description:
      "Full CRM designed and developed for a healthcare-access foundation managing prevention, early intervention, mentorship, and community-based care programs.",
    relatedKeys: ["street-economics"],
    story: {
      what: "The CRM for HRR Foundation, which runs prevention, mentorship, and community care programs.",
      problem:
        "The programs needed to be visible to the people they serve, and new prospects needed a path in. A stack of inboxes could not hold that.",
      solution:
        "OnCode designed and developed the CRM the foundation uses to run those programs and keep incoming interest in one place.",
    },
  },
  {
    key: "mcbride",
    media: "/redesign/projects/mcbride.png",
    title: "McBride Basketball Academy",
    kind: "Booking Platform",
    description:
      "Booking platform with Stripe payments, Google Calendar sync, and an admin dashboard for session management.",
    relatedKeys: ["hoops-2u-dmv", "tint-labs"],
    story: {
      what: "The booking site for McBride Basketball Academy.",
      problem:
        "Parents needed to see the academy and book a session. The academy needed those signups, payments, and the calendar in one place.",
      solution:
        "OnCode designed and built the booking platform: Stripe payments, Google Calendar sync, and an admin dashboard for the sessions.",
    },
  },
  {
    key: "prmnt-pro",
    media: "/redesign/projects/preeminent.jpeg",
    title: "Preeminent Professional Services",
    kind: "Corporate Site",
    description:
      "Website designed, developed, and maintained for facility management services.",
    story: {
      what: "The website for Preeminent Professional Services, a facility management company.",
      problem:
        "They had no online presence and were losing opportunities. Prospects could not find the company or start a conversation.",
      solution:
        "OnCode designed, developed, and maintains the site, and set up the Google Business profile, client-communication automation, and a chatbot so inquiries are handled without waiting on a person.",
      reviewName: "Preeminent Professional",
    },
  },
];

export function projectPath(key: string) {
  return `/work/${key}`;
}

export function getProject(key: string) {
  return WORK_PROJECTS.find((project) => project.key === key);
}
