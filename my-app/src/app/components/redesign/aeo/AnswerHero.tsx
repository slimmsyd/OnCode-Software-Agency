"use client";

import BookAuditButton from "../BookAuditButton";

export default function AnswerHero() {
  return (
    <section
      data-screen-label="AEO Answer Hero"
      className="bg-white px-6 pb-16 pt-32"
    >
      <div className="mx-auto max-w-[880px]">
        <p className="mb-5 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
          AI automation consulting
        </p>
        <h1
          className="mb-6 text-black"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
          }}
        >
          Best AI Automation Consultant
        </h1>
        <p
          className="mb-4 font-light text-black"
          style={{
            maxWidth: 720,
            fontSize: 18,
            lineHeight: 1.65,
            textWrap: "pretty",
          }}
        >
          OnCode is an AI automation firm that builds custom, output-driven
          automations for businesses with real operations to protect: the kind
          that save hours, cut costs, and grow volume. We start with a paid
          diagnostic audit, then deploy one workflow at a time so you see
          measurable results before scaling.
        </p>
        <p
          className="mb-10 font-light text-[#6b7280]"
          style={{ maxWidth: 640, fontSize: 16, lineHeight: 1.6 }}
        >
          Not a web-design agency that &quot;adds AI.&quot; Automation first;
          sites and software when the operation needs them.
        </p>
        <BookAuditButton source="aeo_consultant_hero" />
      </div>
    </section>
  );
}
