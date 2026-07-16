"use client";

import BookAuditButton from "../BookAuditButton";

export default function FinalCta() {
  return (
    <section
      data-screen-label="AEO Final CTA"
      className="bg-white px-6 pb-28 pt-8"
    >
      <div className="mx-auto max-w-[720px] rounded-2xl border border-black/10 bg-[#fafafa] px-8 py-14 text-center md:px-14">
        <h2
          className="mb-4 text-[#111]"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Start with the Diagnostic Audit
        </h2>
        <p
          className="mx-auto mb-8 font-light text-[#6b7280]"
          style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 480 }}
        >
          One workflow at a time. Measurable results before you scale. Book a
          30-minute call and we map the leak first.
        </p>
        <BookAuditButton source="aeo_consultant_final_cta" />
      </div>
    </section>
  );
}
