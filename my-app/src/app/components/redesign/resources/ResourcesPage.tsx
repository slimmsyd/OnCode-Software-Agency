"use client";

import RedesignNav from "../RedesignNav";
import RedesignFooter from "../RedesignFooter";
import ResourceRow from "./ResourceRow";
import { RESOURCES } from "./resources-data";

const HERO_MASK =
  "radial-gradient(ellipse 120% 120% at 92% 30%, black 0%, transparent 85%)";

const TAGS = ["Agent skills", "Templates", "Drive setups"];

export default function ResourcesPage() {
  return (
    <div className="relative bg-white">
      <RedesignNav />

      <section
        data-screen-label="Resources header"
        className="relative overflow-hidden bg-white px-6 pt-20"
      >
        {/* Same masked grid + sweep as the homepage hero. Header only. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)," +
              " linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            WebkitMaskImage: HERO_MASK,
            maskImage: HERO_MASK,
          }}
        />
        <div
          className="oc-hero-glow pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 0%, transparent 45%," +
              " rgba(100,150,255,0.15) 48%, rgba(100,150,255,0.25) 50%," +
              " rgba(100,150,255,0.15) 52%, transparent 55%, transparent 100%)",
            backgroundSize: "200% 200%",
            animation: "oc-gridGlow 8s ease-in-out infinite",
            mixBlendMode: "overlay",
            WebkitMaskImage: HERO_MASK,
            maskImage: HERO_MASK,
          }}
        />

        <div className="oc-fade-up relative z-10 mx-auto max-w-[1100px]">
          <p className="mb-6 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
            Free. No email, no form.
          </p>
          <h1
            className="mb-5 text-[#111]"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Resources.
          </h1>
          <p
            className="font-light text-[#6b7280]"
            style={{ margin: 0, maxWidth: 660, fontSize: 18, lineHeight: 1.6, textWrap: "pretty" }}
          >
            A growing library of tools we built for ourselves, then packaged up.
            Each one is a skill your agent can run today, with the template and
            folder structure already set up. Four here now. More dropping soon.
            Take what is useful. Nothing here asks for your email.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {TAGS.map((t) => (
              <span
                key={t}
                className="inline-flex h-[30px] items-center rounded-full border border-black/15 px-3.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#111111]"
              >
                {t}
              </span>
            ))}
            <span className="inline-flex h-[30px] items-center rounded-full bg-[#fafafa] px-3.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#767676]">
              More dropping soon
            </span>
          </div>
        </div>
      </section>

      <section data-screen-label="Resource list" className="bg-white px-6 pb-10 pt-20">
        <div className="mx-auto max-w-[1100px]">
          {RESOURCES.map((item, i) => (
            <ResourceRow
              key={item.key}
              item={item}
              last={i === RESOURCES.length - 1}
            />
          ))}
          <p className="mt-12 text-[16px] font-light italic text-black/50">
            Built for a real job first, given away second. That is the only test
            something has to pass to end up here. The library grows as we do.
          </p>
        </div>
      </section>

      <RedesignFooter />
    </div>
  );
}
