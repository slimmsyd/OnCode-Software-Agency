// Project data for the Work flow mockups. Copy comes from
// my-app/src/app/components/redesign/WorkSection.tsx, the POS case study page,
// and tint-labs-case-study.md. Nothing here is invented.

window.OC = (function () {
  const ASSET_ROOT = "../../../my-app/public/redesign/";

  const CATEGORIES = {
    websites: "Websites",
    apps: "Web apps",
    crm: "CRM & automation",
    payments: "Payments",
  };

  const PROJECTS = [
    {
      slug: "tint-labs",
      title: "Tint Labs",
      category: "websites",
      kind: "Website, booking, and lead capture",
      summary:
        "1 in 5 leads was slipping through, about $7,000 in six months. We built the system that catches all of them: bookings on the site, quotes drafted in minutes, and an inbox that sorts itself.",
      image: "tintlabs.jpeg",
      w: 1024,
      h: 747,
      featured: true,
      facts: { client: "Window tinting shop" },
      story: {
        stats: [
          { value: "268", label: "Leads audited in the six months before" },
          { value: "50", label: "Leads that never got a reply" },
          { value: "$7K", label: "Work that walked away" },
          { value: "18/wk", label: "Lead flow after launch, up from about 10" },
        ],
        sections: [
          {
            heading: "The leak",
            body: "268 leads came through in six months. 50 of them never heard back. 42 had quotes already written, typed out and priced, then sent to the wrong inbox. 58 came in on weekends and sat until Monday.",
          },
          {
            heading: "The build",
            body: "A site that books work directly, captures every lead, and drafts the customer's exact quote, right vehicle and right price, within minutes of the form coming in. Built and launched in weeks, managed since.",
          },
          {
            heading: "The result",
            body: "Lead flow nearly doubled to 18 a week, including a 110-lead month. Every inquiry is logged, labeled, and answered from one place, nights and weekends included. The operation runs through the system, not the owner's phone.",
          },
        ],
      },
    },
    {
      slug: "pos-extension",
      title: "POS Web Extension",
      category: "payments",
      kind: "Browser extension for card and ACH payments",
      summary:
        "Built for a Fredericksburg-area auto repair shop on a legacy POS. The extension reroutes card and ACH through a payment layer the shop controls, so it cuts vendor lock-in cost and sets its own payment rules.",
      image: "pos-pay-extension.png",
      w: 726,
      h: 1222,
      fit: "contain",
      featured: true,
      facts: {
        client: "Auto repair shop",
        where: "Fredericksburg, Virginia",
      },
      story: {
        sections: [
          {
            heading: "The problem",
            body: "Day-to-day operations ran on a legacy point-of-sale and shop management system. Leaving it was not realistic. Staying on it meant payments, fees, and payment rules were still dictated by the vendor.",
          },
          {
            heading: "The build",
            body: "A browser extension that connects to the existing POS, including Tekmetric-connected shops, and gives staff one payment surface for card and ACH. Payments go through the extension instead of the vendor route, while the rest of the workflow stays in the software staff already know.",
          },
          {
            heading: "The result",
            body: "The shop keeps the software it depends on and takes payments through a path it controls. That lowers payment cost, opens room for shop-defined payment rules, and keeps thousands of dollars that used to go to a payment stack nobody chose on purpose.",
          },
        ],
        quote: {
          body: "Oncode and Sydney have been great to work with. Sydney knows his business and is a master at keeping projects on track. We've hit every milestone early or on time.",
          name: "Robert Dunn",
          source: "Google review",
        },
      },
    },
    {
      slug: "obsidian-protocol",
      title: "Obsidian Protocol",
      category: "apps",
      kind: "Full application MVP, system design to hosting",
      summary:
        "Full application MVP in partnership with Alpine Gold Exchange, from system design through hosting, for a DeFi protocol that converts 1:1 gold-backed assets into digital tokens on the Solana blockchain.",
      image: "obsidian-protocol.jpeg",
      w: 1024,
      h: 576,
      link: "https://www.w3bs.fun/",
    },
    {
      slug: "screwit-pros",
      title: "ScrewIt Pros",
      category: "apps",
      kind: "Full application MVP, system design to hosting",
      summary:
        "End-to-end MVP for Houston furniture assembly: system design, UI and UX, full-stack development, hosting, and maintenance. Instant quotes, workshop assembly, and door-to-door delivery.",
      image: "screwitpro.jpg",
      w: 1280,
      h: 720,
      link: "https://www.screwitpro.com/",
    },
    {
      slug: "serenity-helping-hands",
      title: "Serenity Helping Hands",
      category: "websites",
      kind: "Website design, development, and hosting",
      summary:
        "A story-led site for a veteran-founded, family-owned shared housing provider, with residence details and inquiry capture for veterans looking for stable, supportive housing.",
      image: "serenity-helping-hands.jpg",
      w: 1280,
      h: 720,
      link: "https://www.serenityhelpinghandsllc.com/",
    },
    {
      slug: "pruventa",
      title: "Pruventa",
      category: "websites",
      kind: "Website design, development, and hosting",
      summary:
        "Site for a specialty-access platform that helps FQHCs, rural clinics, and safety-net organizations deliver specialty care inside the workflows they already use.",
      image: "pruventa.jpg",
      w: 1280,
      h: 720,
      link: "https://www.pruventa.com/",
    },
    {
      slug: "hoops-2u-dmv",
      title: "Hoops 2u DMV",
      category: "apps",
      kind: "Web application with CRM and booking automation",
      summary:
        "Full web application for a DMV mobile entertainment business: CRM, booking automation, event scheduling, and reconciliation, built around their business outcomes.",
      image: "hoops2u-dmv.jpg",
      w: 1024,
      h: 576,
      link: "https://www.hoops2udmv.com/",
    },
    {
      slug: "patriot-media",
      title: "Patriot Entertainment & Media Group",
      category: "websites",
      kind: "Website design, development, and hosting",
      summary:
        "A video-led site for a DMV live entertainment company serving military families, with event listings, artist showcases, and booking inquiry capture.",
      image: "patriot-media.jpg",
      w: 1280,
      h: 720,
      link: "https://www.patriotmediausa.com/",
    },
    {
      slug: "street-economics",
      title: "Street Economics",
      category: "crm",
      kind: "Digital infrastructure and CRM",
      summary:
        "Website, hosting, and CRM for a 220+ member economic community, set up to run membership, engagement, and growth.",
      image: "streetecon.webp",
      w: 1280,
      h: 720,
    },
    {
      slug: "phaseworks",
      title: "PhaseWorks Engineering",
      category: "crm",
      kind: "Website and CRM systems",
      summary:
        "Website design, development, and deployment for an infrastructure engineering firm, plus CRM systems so project delivery and client operations run on one stack.",
      image: "phaseworks.jpeg",
      w: 1280,
      h: 720,
      link: "https://www.phaseworksengineering.com/",
    },
    {
      slug: "boxraw-labs",
      title: "BoxRaw Labs",
      category: "apps",
      kind: "Web application",
      summary:
        "Custom web application for a boxing performance lab to manage training data and coordinate internal team workflows.",
      image: "boxraw.jpeg",
      w: 1024,
      h: 605,
    },
    {
      slug: "we-pray-to-flourish",
      title: "We Pray To Flourish",
      category: "crm",
      kind: "Ecommerce, CRM, and hosting",
      summary:
        "Custom CRM, hosting, and digital infrastructure for an author-led brand, with an ecommerce site, Stripe payments, book sales, and newsletter growth.",
      image: "wepray2flourish.jpeg",
      w: 1024,
      h: 585,
    },
    {
      slug: "hrr-foundation",
      title: "HRR Foundation",
      category: "crm",
      kind: "CRM design and development",
      summary:
        "Full CRM for a healthcare-access foundation managing prevention, early intervention, mentorship, and community-based care programs.",
      image: "hrr-foundation.png",
      w: 2400,
      h: 1500,
    },
    {
      slug: "mcbride-basketball",
      title: "McBride Basketball Academy",
      category: "apps",
      kind: "Booking platform",
      summary:
        "Booking platform with Stripe payments, Google Calendar sync, and an admin dashboard for session management.",
      image: "mcbride.png",
      w: 2254,
      h: 1908,
    },
    {
      slug: "gliddy",
      title: "Gliddy",
      category: "apps",
      kind: "Event platform",
      summary: "End-to-end event management platform built for bartenders.",
      image: "gliddy.jpeg",
      w: 1200,
      h: 787,
    },
    {
      slug: "new-world-television",
      title: "New World Television",
      category: "websites",
      kind: "Custom website, booking automation, and CRM",
      summary:
        "Custom website with booking automations and CRM setup for a media network platform.",
      image: "new-world-television.jpeg",
      w: 1024,
      h: 576,
    },
    {
      slug: "sj-wellness",
      title: "SJ Wellness",
      category: "websites",
      kind: "Website",
      summary: "Website designed and developed for a wellness center.",
      image: "sj-wellness.jpeg",
      w: 1024,
      h: 747,
    },
    {
      slug: "preeminent",
      title: "Preeminent Professional Services",
      category: "websites",
      kind: "Corporate site, designed and maintained",
      summary:
        "Website designed, developed, and maintained for a facility management services company.",
      image: "preeminent.jpeg",
      w: 1024,
      h: 572,
    },
  ];

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function img(project, { eager = false, className = "" } = {}) {
    return `<img class="${className}" src="${ASSET_ROOT}projects/${project.image}" alt="${esc(project.title)}" width="${project.w}" height="${project.h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  }

  function bySlug(slug) {
    return PROJECTS.find((p) => p.slug === slug);
  }

  function currentProject() {
    const slug = new URLSearchParams(window.location.search).get("p");
    return bySlug(slug) ?? PROJECTS[0];
  }

  function nextAfter(slug, count = 1) {
    const i = PROJECTS.findIndex((p) => p.slug === slug);
    return Array.from({ length: count }, (_, n) => PROJECTS[(i + 1 + n) % PROJECTS.length]);
  }

  function domain(url) {
    return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  }

  const ARROW =
    '<svg class="arrow" width="20" height="12" viewBox="0 0 20 12" aria-hidden="true"><path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
  const ARROW_BACK =
    '<svg class="arrow arrow--back" width="20" height="12" viewBox="0 0 20 12" aria-hidden="true"><path d="M20 6H2M7 1 2 6l5 5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
  const EXTERNAL =
    '<svg class="ext" width="11" height="11" viewBox="0 0 11 11" aria-hidden="true"><path d="M1 10 10 1M3.5 1H10v6.5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';

  return {
    ASSET_ROOT,
    CATEGORIES,
    PROJECTS,
    esc,
    img,
    bySlug,
    currentProject,
    nextAfter,
    domain,
    ARROW,
    ARROW_BACK,
    EXTERNAL,
  };
})();
