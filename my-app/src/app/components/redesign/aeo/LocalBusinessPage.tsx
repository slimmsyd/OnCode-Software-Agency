import Link from "next/link";
import RedesignNav from "../RedesignNav";
import RedesignFooter from "../RedesignFooter";

const LEAKS = [
  {
    title: "Repeated admin",
    detail: "Quotes, invoices, follow-ups, and scheduling still move by text and spreadsheet.",
  },
  {
    title: "Split records",
    detail: "The inbox, the job system, and the books each hold a different customer.",
  },
  {
    title: "One person is the system",
    detail: "If they are out, the workflow stops. Automation replaces that dependency.",
  },
];

const STEPS = [
  {
    mark: "01",
    title: "Diagnostic",
    detail: "A paid audit of where time and money leave. You keep the map.",
  },
  {
    mark: "02",
    title: "One workflow",
    detail: "The first automation ships against that map, then the hours are measured.",
  },
  {
    mark: "03",
    title: "The system stays",
    detail: "Sites and software follow when the operation needs them.",
  },
];

const PROOF = [
  {
    href: "/work/pos-extension",
    title: "POS extension",
    detail: "Fewer steps at the counter. A record the staff can trust on the next shift.",
  },
  {
    href: "/work/tint-labs",
    title: "Tint Labs",
    detail: "A local tint shop's site books the job and catches every lead. We built it, and we still maintain it.",
  },
];

const CITIES = [
  "Washington, DC",
  "Arlington",
  "Alexandria",
  "Fairfax",
  "Tysons",
  "Reston",
  "Bethesda",
  "Silver Spring",
  "Fredericksburg",
];

export default function LocalBusinessPage() {
  return (
    <div className="bg-white text-[#111]">
      <RedesignNav variant="inner" />
      <main className="px-6 pb-24 pt-28">
        <section className="mx-auto max-w-[880px]">
          <p className="mb-5 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            Washington, Maryland, Virginia
          </p>
          <h1 className="max-w-[16ch] text-[clamp(36px,5vw,56px)] font-light leading-[1.08] tracking-[-0.025em]">
            AI automation for local businesses.
          </h1>
          <p className="mt-6 max-w-[42rem] text-[18px] font-light leading-[1.65]">
            OnCode finds the work your shop, office, or field team repeats, then
            builds the system that does it. Websites, software, and AI
            automation, starting with a paid diagnostic.
          </p>
          <p className="mt-3 max-w-[40rem] text-[16px] font-light leading-[1.6] text-[#6b7280]">
            For owners in the DMV who need the operation to run without one
            person holding every step.
          </p>
          <Link
            href="#next"
            className="mt-8 inline-flex min-h-11 cursor-pointer items-center justify-center border border-black/10 bg-white px-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111] transition-colors duration-200 hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            See how consulting works
          </Link>
        </section>

        <section className="mx-auto mt-20 max-w-[880px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
            The leak
          </p>
          <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-medium leading-[1.1] tracking-[-0.03em]">
            Where the day leaks.
          </h2>
          <div className="mt-5 border-t border-black/10">
            {LEAKS.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[52px] flex-col gap-1 border-b border-black/10 py-4 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <strong className="shrink-0 text-[15px] font-medium">{item.title}</strong>
                <span className="text-[14px] leading-snug text-[#6b7280]">{item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[880px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
            The engagement
          </p>
          <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-medium leading-[1.1] tracking-[-0.03em]">
            How an engagement runs.
          </h2>
          <div className="mt-5 grid grid-cols-1 border-l border-t border-black/10 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.mark} className="relative min-h-[168px] border-b border-r border-black/10 p-5 pt-9">
                <span className="absolute right-0 top-0 bg-[#171717] px-1.5 text-[12px] font-medium leading-5 text-white/90">
                  {step.mark}
                </span>
                <h3 className="text-[15px] font-medium">{step.title}</h3>
                <p className="mt-1 text-[14px] leading-snug text-[#6b7280]">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[880px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
            Proof
          </p>
          <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-medium leading-[1.1] tracking-[-0.03em]">
            Builds in the region.
          </h2>
          <div className="mt-5 border-t border-black/10">
            {PROOF.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-[52px] cursor-pointer flex-col gap-1 border-b border-black/10 py-4 transition-colors duration-200 hover:bg-black/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:flex-row sm:items-baseline sm:gap-4"
              >
                <strong className="shrink-0 text-[15px] font-medium">{item.title}</strong>
                <span className="text-[14px] leading-snug text-[#6b7280]">{item.detail}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[880px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
            Service area
          </p>
          <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-medium leading-[1.1] tracking-[-0.03em]">
            Where we work.
          </h2>
          <div className="mt-5 grid grid-cols-1 border-l border-t border-black/10 sm:grid-cols-3">
            {CITIES.map((city) => (
              <span
                key={city}
                className="flex min-h-[52px] items-center border-b border-r border-black/10 px-4 text-[14px] font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        <section
          id="next"
          className="mx-auto mt-20 max-w-[880px] bg-[#0a0a0a] px-8 py-14 text-center text-white"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Next step
          </p>
          <h2 className="mx-auto mt-3 max-w-[18ch] text-[clamp(28px,4vw,40px)] font-medium leading-[1.15] tracking-[-0.03em]">
            The consultant page has the full offer.
          </h2>
          <p className="mx-auto mt-3 max-w-[36rem] text-[16px] font-light leading-[1.6] text-white/70">
            Scope, examples, and how the diagnostic is booked live on the AI
            automation consultant page.
          </p>
          <Link
            href="/ai-automation-consultant"
            className="mt-7 inline-flex min-h-11 cursor-pointer items-center justify-center border border-white/30 bg-transparent px-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Continue to AI automation consulting
          </Link>
        </section>
      </main>
      <RedesignFooter />
    </div>
  );
}
