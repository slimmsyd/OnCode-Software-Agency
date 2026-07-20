import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RedesignNav from "@/app/components/redesign/RedesignNav";
import RedesignFooter from "@/app/components/redesign/RedesignFooter";
import BookAuditButton from "@/app/components/redesign/BookAuditButton";
import JsonLd, { buildFaqPageSchema } from "@/app/components/JsonLd";
import { reviews } from "@/app/components/reviews";

const robertReview = reviews.find((r) => r.name === "Robert Dunn");

const PAGE_URL = "https://www.0ncode.com/work/pos-extension";
const TITLE = "POS Web Extension Case Study";
const DESCRIPTION =
  "Built for a Fredericksburg-area auto repair shop on a legacy POS: OnCode shipped a browser extension so the shop takes card and ACH on its own rails, sets payment criteria, and cuts vendor lock-in cost. Same pattern works for shops beyond the DMV.";

const POS_FAQ = [
  {
    q: "Do you build custom software for businesses in Fredericksburg?",
    a: "Yes. OnCode is based around Fredericksburg, Virginia and builds custom software, browser extensions, web apps, and AI automation for local operators and remote clients. This POS Pay extension was built for a Fredericksburg-area auto repair shop.",
  },
  {
    q: "Can other shops outside Fredericksburg use a POS extension like this?",
    a: "Yes. The pattern is portable: keep the legacy POS staff already know, put a browser extension on top for card and ACH, and own the payment criteria and cost structure. We have shipped this for a Fredericksburg-area shop and can adapt it for repair shops and similar operators elsewhere in the DMV or nationwide.",
  },
  {
    q: "Is this the same as hiring a web design agency?",
    a: "No. This is a custom payment and workflow layer on top of shop software—not a marketing website. OnCode is an AI automation and software firm: we build extensions, automations, sites, and apps when the operation needs them.",
  },
  {
    q: "What POS systems does this work with?",
    a: "The build connects to the shop's existing point-of-sale and shop management stack, including Tekmetric-connected shops. The point is to reroute payments without forcing the shop to abandon the system they run every day.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "POS web extension",
    "POS Pay",
    "Tekmetric payments",
    "auto repair POS",
    "Fredericksburg software",
    "Fredericksburg VA custom software",
    "DMV browser extension",
    "repair shop payments",
    "legacy POS lock-in",
    "OnCode",
  ],
  openGraph: {
    title: `${TITLE} | OnCode`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: "https://www.0ncode.com/redesign/projects/pos-pay-extension.png",
        width: 1200,
        height: 1600,
        alt: "POS Pay browser extension: take card or ACH payments while connected to Tekmetric",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | OnCode`,
    description: DESCRIPTION,
    images: ["https://www.0ncode.com/redesign/projects/pos-pay-extension.png"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "POS Web Extension: shop-owned payments on a legacy POS",
      name: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      image:
        "https://www.0ncode.com/redesign/projects/pos-pay-extension.png",
      datePublished: "2026-01-01",
      dateModified: "2026-07-20",
      author: {
        "@type": "Organization",
        name: "OnCode",
        url: "https://www.0ncode.com",
      },
      publisher: {
        "@type": "Organization",
        name: "OnCode",
        url: "https://www.0ncode.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.0ncode.com/Personal/OnCodeShareImage.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": PAGE_URL,
      },
      about: [
        {
          "@type": "Thing",
          name: "Point of sale payment extension",
        },
        {
          "@type": "Thing",
          name: "Auto repair shop software",
        },
        {
          "@type": "Thing",
          name: "Browser extension",
        },
      ],
      contentLocation: {
        "@type": "City",
        name: "Fredericksburg",
        containedInPlace: {
          "@type": "State",
          name: "Virginia",
          containedInPlace: {
            "@type": "Country",
            name: "US",
          },
        },
      },
      spatialCoverage: [
        {
          "@type": "City",
          name: "Fredericksburg",
          containedInPlace: {
            "@type": "State",
            name: "Virginia",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "DMV (Washington DC, Maryland, Virginia)",
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      keywords:
        "POS extension, Fredericksburg VA, auto repair payments, Tekmetric, browser extension, OnCode",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#software`,
      name: "POS Pay",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Browser extension",
      operatingSystem: "Web browser",
      description:
        "Browser extension that connects to a shop POS (including Tekmetric-connected shops) and captures card or ACH payments on shop-controlled rails.",
      provider: {
        "@type": "Organization",
        name: "OnCode",
        url: "https://www.0ncode.com",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description:
          "Custom build for repair shops; scoped after a diagnostic audit.",
      },
    },
  ],
};

export default function PosExtensionCaseStudyPage() {
  return (
    <div className="relative min-h-screen bg-white pb-20">
      <JsonLd data={caseStudySchema} />
      <JsonLd data={buildFaqPageSchema(POS_FAQ)} />
      <RedesignNav />

      <main className="mx-auto max-w-[1100px] px-6 pt-28 pb-16 min-[701px]:px-10 min-[701px]:pt-36">
        <Link
          href="/#work"
          className="mb-10 inline-flex cursor-pointer items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-black/50 transition-colors duration-200 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to work
        </Link>

        <header className="mb-16 max-w-[720px]">
          <p className="mb-4 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            Case study · Fredericksburg, VA
          </p>
          <h1
            className="mb-5 text-[#111]"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            POS Web Extension
          </h1>
          <p className="text-[17px] leading-[1.65] text-[#4b5563]">
            Built for a Fredericksburg-area auto repair shop stuck on a legacy
            POS. OnCode shipped a browser extension so the shop takes card and
            ACH on its own rails, sets its own payment criteria, and cuts the
            cost of vendor payment lock-in—and the same pattern works for shops
            beyond the DMV.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Auto repair",
              "Browser extension",
              "Payments",
              "Legacy POS",
              "Fredericksburg",
              "DMV",
              "Virginia",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1 text-[12px] font-medium tracking-wide text-[#4b5563]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section
          aria-labelledby="location-heading"
          className="mb-16 rounded-2xl border border-black/10 bg-[#fafafa] px-6 py-8 md:px-8"
        >
          <p className="mb-3 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            Where this ran
          </p>
          <h2
            id="location-heading"
            className="mb-6 text-[22px] font-normal tracking-[-0.015em] text-[#111]"
          >
            Local proof. Portable pattern.
          </h2>
          <dl className="grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="mb-1 text-[12px] font-medium uppercase tracking-[0.06em] text-black/45">
                Location
              </dt>
              <dd className="text-[15px] leading-relaxed text-[#4b5563]">
                Fredericksburg area, Virginia — OnCode&apos;s home market in
                the DMV.
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-[12px] font-medium uppercase tracking-[0.06em] text-black/45">
                Client context
              </dt>
              <dd className="text-[15px] leading-relaxed text-[#4b5563]">
                Auto repair shop on a legacy POS / shop management stack
                (including Tekmetric-connected workflows).
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-[12px] font-medium uppercase tracking-[0.06em] text-black/45">
                Deliverable
              </dt>
              <dd className="text-[15px] leading-relaxed text-[#4b5563]">
                Custom browser extension (POS Pay): card + ACH on shop-owned
                rails without replacing the POS.
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="product-heading" className="mb-16">
          <p className="mb-3 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            The product
          </p>
          <h2
            id="product-heading"
            className="mb-6 text-[26px] font-normal tracking-[-0.015em] text-[#111]"
          >
            POS Pay: payments owned by the shop, not the POS vendor.
          </h2>
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-[#f8f8f8] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
            <Image
              src="/redesign/projects/pos-pay-extension.png"
              alt="POS Pay extension UI showing Tekmetric connection status, today's collected total, and Card or ACH payment options"
              width={900}
              height={1200}
              className="mx-auto h-auto w-full max-w-[420px] object-contain object-top md:max-w-[480px]"
              priority
            />
            <figcaption className="border-t border-black/10 bg-white px-6 py-4 text-[14px] leading-relaxed text-[#6b7280]">
              Extension UI: live connection to the shop&apos;s existing POS,
              same-day collection totals, and direct Card or ACH capture
              without routing every charge through the vendor payment path.
            </figcaption>
          </figure>
        </section>

        <div className="mb-16 grid gap-12 md:grid-cols-1 md:gap-14">
          <section aria-labelledby="problem-heading">
            <p className="mb-3 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
              The problem
            </p>
            <h2
              id="problem-heading"
              className="mb-4 text-[26px] font-normal tracking-[-0.015em] text-[#111]"
            >
              The shop software worked. The payment path did not serve the
              shop.
            </h2>
            <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#4b5563]">
              For this Fredericksburg-area repair shop—and for many operators
              on the same stack—day-to-day ops run on a legacy point-of-sale and
              shop management system. Leaving that stack was not realistic.
              Staying on it meant payments, fees, and payment rules were still
              dictated by the vendor. They needed a way to keep the system staff
              already know and still control how money moves: lower cost, their
              own criteria, and no permanent lock-in on the payment rail.
            </p>
          </section>

          <section aria-labelledby="build-heading">
            <p className="mb-3 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
              The build
            </p>
            <h2
              id="build-heading"
              className="mb-4 text-[26px] font-normal tracking-[-0.015em] text-[#111]"
            >
              A web extension that reroutes payments through a layer the shop
              controls.
            </h2>
            <p className="mb-8 max-w-[640px] text-[17px] leading-[1.65] text-[#4b5563]">
              We built a browser extension that connects to the existing POS
              (including Tekmetric-connected shops) and gives staff a clear
              payment surface: card (keyed or saved) and ACH bank transfer.
              Payments go through the extension path instead of the default
              vendor route, so the business can apply its own payment criteria
              and cost structure while the legacy UI stays in place for the rest
              of the workflow.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Reroute, do not replace",
                  body: "The shop keeps its legacy POS. The extension sits on top and owns the payment step.",
                },
                {
                  title: "Control cost",
                  body: "Shops stop absorbing vendor payment lock-in and can run payments on terms they choose.",
                },
                {
                  title: "Own the criteria",
                  body: "Card and ACH rules live in the extension layer, not only inside the vendor stack.",
                },
                {
                  title: "Works where staff already are",
                  body: "Browser-based, connected to the shop system they already open every day.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-black/10 px-5 py-6"
                >
                  <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-black">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#6b7280]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="result-heading">
            <p className="mb-3 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
              The result
            </p>
            <h2
              id="result-heading"
              className="mb-4 text-[26px] font-normal tracking-[-0.015em] text-[#111]"
            >
              Thousands saved by not staying locked into the vendor payment
              system.
            </h2>
            <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#4b5563]">
              The shop keeps the operational software it depends on and takes
              payments through a path it controls. That shift reduces payment
              cost, opens room for shop-defined payment rules, and avoids the
              slow bleed of full vendor lock-in. For the businesses running the
              extension—including this Fredericksburg-area operator—the
              practical outcome is thousands of dollars kept instead of lost to
              a payment stack they never chose on purpose.
            </p>
          </section>
        </div>

        <section
          aria-labelledby="review-heading"
          className="mb-16 border-t-2 border-black pt-10"
        >
          <p
            id="review-heading"
            className="mb-6 text-[14px] font-light uppercase tracking-[0.05em] text-black/50"
          >
            Client review
          </p>
          <blockquote className="max-w-[720px]">
            <p className="text-[clamp(22px,3vw,28px)] font-light leading-[1.4] tracking-[-0.015em] text-[#111]">
              &ldquo;
              {robertReview?.body ??
                "Oncode and Sydney have been great to work with. Sydney knows his business and is a master at keeping projects on track. We've hit every milestone early or on time. He is flexible with his communication and patient when priorities change."}
              &rdquo;
            </p>
            <footer className="mt-6 text-[15px] text-[#6b7280]">
              <cite className="not-italic font-medium text-[#111]">
                {robertReview?.name ?? "Robert Dunn"}
              </cite>
              <span className="mx-2 text-black/30">·</span>
              {robertReview?.username ?? "Verified Google Review"}
            </footer>
          </blockquote>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="mb-20 border-t border-black/10 pt-12"
        >
          <p className="mb-3 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mb-10 text-[26px] font-normal tracking-[-0.015em] text-[#111]"
          >
            Local delivery. National-ready pattern.
          </h2>
          <ul className="max-w-[720px] divide-y divide-black/10 border-y border-black/10">
            {POS_FAQ.map((item) => (
              <li key={item.q} className="py-6">
                <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-black">
                  {item.q}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#6b7280]">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-[#0a0a0a] px-8 py-12 text-white md:px-12 md:py-14">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-white/50">
            Next step
          </p>
          <h2 className="mb-4 max-w-[22ch] text-[clamp(28px,4vw,36px)] font-light leading-[1.15] tracking-[-0.02em]">
            Stuck inside a system that owns your payments?
          </h2>
          <p className="mb-8 max-w-[480px] text-[16px] leading-[1.6] text-white/65">
            Whether you&apos;re in Fredericksburg, the wider DMV, or remote—we
            build the layer on top: extensions, payment flows, and workflows
            that keep your ops stack and give you back control of cost and
            criteria.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BookAuditButton source="pos_extension_case_study" />
            <Link
              href="/#work"
              className="inline-flex cursor-pointer items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              More selected work <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <RedesignFooter />
    </div>
  );
}
