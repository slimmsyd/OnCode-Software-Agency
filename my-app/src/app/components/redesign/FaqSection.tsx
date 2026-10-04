"use client";

import Link from "next/link";
import { useState } from "react";
import { HOME_FAQ } from "./aeo/faq-home";

const HAIRLINE = "rgba(0,0,0,0.12)";

// Homepage FAQ: AEO seeds + Areas We Serve + audit objections. Schema lives
// on the server page so it matches this shared data file.
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
            Who we are, where we work, and what the audit asks of you. Anything
            else, ask on the call.
          </p>
        </div>

        <div>
          {HOME_FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                style={{
                  borderTop: `0.5px solid ${HAIRLINE}`,
                  borderBottom:
                    i === HOME_FAQ.length - 1
                      ? `0.5px solid ${HAIRLINE}`
                      : "none",
                }}
              >
                <button
                  type="button"
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
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  hidden={!open}
                  style={{ padding: open ? "0 48px 26px 8px" : undefined }}
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
                  {item.link && (
                    <p style={{ margin: "12px 0 0", maxWidth: 600 }}>
                      <Link
                        href={item.link.href}
                        className="cursor-pointer text-[15px] font-medium text-black underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                      >
                        {item.link.label}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
