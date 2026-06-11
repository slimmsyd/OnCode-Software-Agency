"use client";

import BookAuditButton from "./BookAuditButton";

export default function FinalCTA() {
  return (
    <section
      data-screen-label="Start with the audit"
      className="relative mx-auto w-full max-w-[500px] px-4 pb-24 pt-16 text-black"
    >
      <h2 className="section-heading mb-6">Start with the audit</h2>

      <div className="mb-8 flex flex-col gap-5">
        <p className="text-[18px] leading-[1.55] text-black">
          <strong className="font-semibold">
            One call, two weeks, a ranked plan.
          </strong>{" "}
          We scope the audit on a 30-minute call. Two weeks later you know where
          the money is leaking, what each leak costs, and what to fix first.
        </p>
        <p className="text-[18px] leading-[1.55] text-black">
          <strong className="font-semibold">The fee comes off your build.</strong>{" "}
          If you move forward with us, the full audit price is credited against
          the build. You are paying to know, not paying twice.
        </p>
      </div>

      <BookAuditButton />
      <p className="mt-2 text-[12px] text-black/50">Takes 2 minutes to book</p>
    </section>
  );
}
