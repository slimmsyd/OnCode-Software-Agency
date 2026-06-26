"use client";

import { Check, ChevronRight } from "lucide-react";
import { bookAudit } from "./lib";

const DELIVERABLES = [
  "A clear map of how your business actually runs, step by step, start to finish.",
  "Every place time and money leak by hand, marked with what it costs in hours and dollars per month.",
  "A ranked roadmap: what to fix, in what order, and what each fix is worth.",
  "A plan concrete enough to act on, with us or without us.",
];

const STEPS = [
  "We sit with the people who do the work and the person who owns the goals, and draw the honest map.",
  "We walk that map and price every manual leak we find.",
  "We hand back the roadmap and walk you through it.",
];

// The page's one dark band: the paid entry point.
export default function AuditSection() {
  const fg = "#ffffff";
  const body = "rgba(255,255,255,0.72)";
  const muted = "rgba(255,255,255,0.5)";
  const hairline = "rgba(255,255,255,0.12)";

  return (
    <section
      id="audit"
      data-screen-label="The AI Diagnostic Audit"
      className="px-6 py-28 text-white"
      style={{
        background: "#0a0a0a",
        borderTop: `0.5px solid ${hairline}`,
        borderBottom: `0.5px solid ${hairline}`,
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <p
          className="mb-6 text-[14px] font-light uppercase tracking-[0.05em]"
          style={{ color: muted }}
        >
          Start here: the paid entry point
        </p>
        <h2
          className="mb-5"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: fg,
          }}
        >
          The AI Diagnostic Audit
        </h2>
        <p
          className="mb-16"
          style={{
            fontSize: 20,
            fontWeight: 300,
            lineHeight: 1.55,
            maxWidth: 680,
            color: body,
            textWrap: "pretty",
          }}
        >
          Two weeks. We find exactly where your business leaks time and money by
          hand, put a dollar figure on each leak, and hand you a ranked plan to
          seal them.
        </p>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-6">
            <p style={{ fontSize: 17, lineHeight: 1.65, color: body, margin: 0 }}>
              Every manual step your team repeats costs a little time and
              accuracy. A few thousand times a year, it stops being little. The
              audit maps how your business actually runs, prices every leak, and
              hands you a ranked plan{" "}
              <strong style={{ color: fg, fontWeight: 600 }}>
                before anyone spends a dollar building.
              </strong>
            </p>

            <div style={{ borderTop: `0.5px solid ${hairline}`, paddingTop: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px", color: fg }}>
                The investment
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: body, margin: 0 }}>
                Paid upfront, delivered in two weeks. Move into a build and the
                full audit fee comes off the price. You are not paying twice.
              </p>
            </div>
          </div>

          {/* Right: deliverables + mechanics */}
          <div className="flex flex-col gap-8">
            <div
              style={{
                border: `0.5px solid ${hairline}`,
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                padding: 32,
              }}
            >
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  margin: "0 0 20px",
                  color: fg,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                What you walk away with
              </h3>
              <div className="flex flex-col gap-4">
                {DELIVERABLES.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ flexShrink: 0, marginTop: 2, color: fg }}>
                      <Check size={18} />
                    </span>
                    <span style={{ fontSize: 15, lineHeight: 1.55, color: body }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  margin: "0 0 20px",
                  color: fg,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                How it works
              </h3>
              <div className="flex flex-col">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5"
                    style={{
                      padding: "16px 0",
                      borderTop: i === 0 ? "none" : `0.5px solid ${hairline}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: muted,
                        fontVariantNumeric: "tabular-nums",
                        marginTop: 3,
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: 15, lineHeight: 1.55, color: body }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={bookAudit}
                className="inline-flex h-12 items-center gap-2.5 self-start rounded-lg bg-white px-8 text-[15px] font-medium text-black"
              >
                Book the Audit <ChevronRight size={16} />
              </button>
              <span style={{ fontSize: 12, color: muted }}>
                30 minutes. We scope the audit on the call.
              </span>
            </div>
          </div>
        </div>

        <p
          className="italic"
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: muted,
            margin: "72px 0 0",
            maxWidth: 560,
          }}
        >
          You would not let a plumber knock out every wall before he found the
          pipe. First we find it, then we fix it.
        </p>
      </div>
    </section>
  );
}
