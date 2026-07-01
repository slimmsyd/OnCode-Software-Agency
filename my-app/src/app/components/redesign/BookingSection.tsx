"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { trackFormSubmit } from "@/lib/analytics";

const REASSURANCES = [
  "No prep needed. Come as you are.",
  "Roadmap in your hands two weeks after we start.",
  "The audit fee credits in full against any build.",
];

// Inline booking: replaces FinalCTA. Every "Book the Audit" CTA scrolls here,
// so visitors book without leaving the page.
export default function BookingSection() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          trackFormSubmit("cal_booking", { source: "booking_section" });
        },
      });
    })();
  }, []);

  return (
    <section
      id="book"
      data-screen-label="Booking, final CTA"
      className="bg-white"
      style={{
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        padding: "96px 24px 88px",
        scrollMarginTop: 100,
      }}
    >
      <div className="oc-fade-up mx-auto grid max-w-[1060px] grid-cols-1 items-start gap-x-16 gap-y-10 min-[900px]:grid-cols-[360px_1fr]">
        <div style={{ paddingTop: 12 }}>
          <p
            className="text-[14px] font-light uppercase tracking-[0.05em]"
            style={{ margin: "0 0 20px", color: "rgba(0,0,0,0.5)" }}
          >
            Start with the audit
          </p>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#111111",
            }}
          >
            Pick a time. We scope it together.
          </h2>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.65,
              color: "#4b5563",
              textWrap: "pretty",
            }}
          >
            Thirty minutes. We walk your operation at a high level and agree
            what the audit covers. Two weeks later you know where the money
            leaks and what to fix first.
          </p>

          <div
            className="flex flex-col gap-3.5"
            style={{
              borderTop: "0.5px solid rgba(0,0,0,0.1)",
              paddingTop: 24,
            }}
          >
            {REASSURANCES.map((text, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.35)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "#4b5563",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p
            className="italic"
            style={{
              margin: "28px 0 0",
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(0,0,0,0.5)",
            }}
          >
            From idea to implementation, we keep you OnCode.
          </p>
        </div>

        <div
          style={{
            minHeight: 640,
            border: "0.5px solid rgba(0,0,0,0.12)",
            borderRadius: 16,
            overflow: "hidden",
            background: "#ffffff",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <Cal
            namespace="30min"
            calLink="oncode-software-kuxhkk/30min"
            style={{ width: "100%", height: "100%", minHeight: "640px" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>
      </div>
    </section>
  );
}
