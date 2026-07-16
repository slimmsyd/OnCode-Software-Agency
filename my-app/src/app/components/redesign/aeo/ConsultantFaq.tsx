"use client";

import { useState } from "react";
import { CONSULTANT_FAQ } from "./faq-consultant";

const HAIRLINE = "rgba(0,0,0,0.12)";

export default function ConsultantFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-screen-label="AEO Consultant FAQ"
      className="border-t border-black/10 bg-white"
      style={{ padding: "104px 24px", scrollMarginTop: 100 }}
    >
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-x-16 gap-y-10 min-[900px]:grid-cols-[320px_1fr]">
        <div className="self-start min-[900px]:sticky min-[900px]:top-[120px]">
          <p
            className="text-[14px] font-light uppercase tracking-[0.05em]"
            style={{ margin: "0 0 22px", color: "rgba(0,0,0,0.5)" }}
          >
            FAQ
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
            Straight answers.
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
            Geo, ownership, ROI, and what a typical engagement looks like.
          </p>
        </div>

        <div>
          {CONSULTANT_FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                style={{
                  borderTop: `0.5px solid ${HAIRLINE}`,
                  borderBottom:
                    i === CONSULTANT_FAQ.length - 1
                      ? `0.5px solid ${HAIRLINE}`
                      : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`consultant-faq-answer-${i}`}
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
                    id={`consultant-faq-answer-${i}`}
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
