import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RedesignNav from "@/app/components/redesign/RedesignNav";
import RedesignFooter from "@/app/components/redesign/RedesignFooter";
import BookAuditButton from "@/app/components/redesign/BookAuditButton";
import { reviews } from "@/app/components/reviews";

const robertReview = reviews.find((r) => r.name === "Robert Dunn");

export const metadata: Metadata = {
  title: "POS Web Extension Case Study",
  description:
    "How OnCode built a browser extension that routes repair-shop payments outside a legacy POS lock-in, so shops control cost, set their own payment rules, and keep more of every transaction.",
  openGraph: {
    title: "POS Web Extension Case Study | OnCode",
    description:
      "Custom browser extension for auto repair shops on a legacy POS. Reroute card and ACH payments, set your own criteria, and escape vendor pricing lock-in.",
    url: "https://www.0ncode.com/work/pos-extension",
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
  alternates: {
    canonical: "https://www.0ncode.com/work/pos-extension",
  },
};

export default function PosExtensionCaseStudyPage() {
  return (
    <div className="relative min-h-screen bg-white pb-20">
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
            Case study
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
            A browser extension that sits on top of a legacy shop POS so repair
            shops can take card and ACH payments on their own rails, set their
            own payment criteria, and cut the cost of being locked into the
            vendor&apos;s payment stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Auto repair",
              "Browser extension",
              "Payments",
              "Legacy POS",
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
          aria-labelledby="product-heading"
          className="mb-16"
        >
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
              Auto repair shops run day-to-day ops on a legacy point-of-sale and
              shop management system. Leaving that stack was not realistic.
              Staying on it meant payments, fees, and payment rules were still
              dictated by the vendor. Shops needed a way to keep the system they
              already know and still control how money moves: lower cost,
              their own criteria, and no permanent lock-in on the payment rail.
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
              Shops keep the operational software they depend on and take
              payments through a path they control. That shift reduces payment
              cost, opens room for shop-defined payment rules, and avoids the
              slow bleed of full vendor lock-in. For the businesses running the
              extension, the practical outcome is thousands of dollars kept
              instead of lost to a payment stack they never chose on purpose.
            </p>
          </section>
        </div>

        <section
          aria-labelledby="review-heading"
          className="mb-20 border-t-2 border-black pt-10"
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

        <section className="rounded-2xl bg-[#0a0a0a] px-8 py-12 text-white md:px-12 md:py-14">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-white/50">
            Next step
          </p>
          <h2 className="mb-4 max-w-[22ch] text-[clamp(28px,4vw,36px)] font-light leading-[1.15] tracking-[-0.02em]">
            Stuck inside a system that owns your payments?
          </h2>
          <p className="mb-8 max-w-[480px] text-[16px] leading-[1.6] text-white/65">
            We build the layer on top: extensions, payment flows, and
            workflows that keep your ops stack and give you back control of cost
            and criteria.
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
