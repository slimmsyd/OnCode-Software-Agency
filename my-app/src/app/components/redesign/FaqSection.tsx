"use client";

import { useState } from "react";

const HAIRLINE = "rgba(0,0,0,0.12)";

const FAQ_ITEMS = [
  {
    q: "Do I need to be technical?",
    a: "No. You know how your business runs, and that is the only expertise the audit needs. We sit with the people doing the work, map it in plain language, and translate the technical part ourselves. You never see a line of code unless you ask.",
  },
  {
    q: "How much of my time does it take?",
    a: "About three hours across the two weeks. One 30-minute scoping call, a few short sits with the people who do the work, one walkthrough of the roadmap at the end. We do the mapping. You keep running the business.",
  },
  {
    q: "How fast until something ships?",
    a: "The roadmap lands in two weeks. Move into a build and the first fix usually ships in weeks, not months. The audit already ranked what to build first, so nobody spends a month deciding.",
  },
  {
    q: "Is AI actually ready for my business?",
    a: "For the unglamorous work, intake, follow-up, invoicing, reporting, yes. It is boring-reliable. Where AI is not the answer, the roadmap says so and prescribes a plain workflow instead. You are paying for the honest map, not the trend.",
  },
  {
    q: "Who owns the code and the roadmap?",
    a: "You do. The roadmap is yours to act on, with us or without us. Anything we build after is yours too: code, accounts, data. Nothing is held hostage.",
  },
  {
    q: "What does the audit cost?",
    a: "We price it on the scoping call, once we know the size of the map. A flat fee, agreed before we start. The full fee credits against any build. You are paying to know, not paying twice.",
  },
];

// Objection FAQ: answers the objections prospects raise right before the ask.
// One item open at a time; all closed is a valid state; first item open on load.
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-screen-label="FAQ accordion"
      className="bg-white"
      style={{ padding: "104px 24px", scrollMarginTop: 100 }}
    >
      <div className="oc-fade-up mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-x-16 gap-y-10 min-[900px]:grid-cols-[320px_1fr]">
        <div className="self-start min-[900px]:sticky min-[900px]:top-[120px]">
          <p
            className="text-[14px] font-light uppercase tracking-[0.05em]"
            style={{ margin: "0 0 22px", color: "rgba(0,0,0,0.5)" }}
          >
            Before you book
          </p>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#111111",
            }}
          >
            Fair questions.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#6b7280",
              textWrap: "pretty",
            }}
          >
            Straight answers, before you give us thirty minutes. Anything else,
            ask on the call.
          </p>
        </div>

        <div>
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                style={{
                  borderTop: `0.5px solid ${HAIRLINE}`,
                  borderBottom:
                    i === FAQ_ITEMS.length - 1
                      ? `0.5px solid ${HAIRLINE}`
                      : "none",
                }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full cursor-pointer items-baseline justify-between gap-6 text-left"
                  style={{ padding: "22px 8px" }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {item.q}
                  </span>
                  {/* inline-block is required or the rotation will not render */}
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 motion-reduce:transition-none"
                    style={{
                      fontSize: 20,
                      fontWeight: 300,
                      color: "rgba(0,0,0,0.4)",
                      transform: open ? "rotate(45deg)" : "none",
                      transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    style={{ padding: "0 48px 26px 8px" }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: "#4b5563",
                        maxWidth: 600,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
