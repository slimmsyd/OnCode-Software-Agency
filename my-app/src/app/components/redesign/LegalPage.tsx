import type { ReactNode } from "react";
import HomeNavigation from "@/app/components/redesign/HomeNavigation";
import RedesignFooter from "@/app/components/redesign/RedesignFooter";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  intro: ReactNode;
  sections: LegalSection[];
};

/** Shared layout for the Privacy Policy and Terms of Service pages. */
export default function LegalPage({
  title,
  effectiveDate,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="relative min-h-screen bg-[#fafaf9]">
      <HomeNavigation variant="inner" />
      <main className="mx-auto max-w-[760px] px-6 pb-28 pt-28 min-[701px]:px-10 min-[701px]:pt-36">
        <h1 className="text-[clamp(36px,6vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#111]">
          {title}
        </h1>
        <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.14em] text-[#767676]">
          Effective {effectiveDate}
        </p>
        <div className="mt-8 text-[17px] leading-[1.7] text-[#4b5563]">
          {intro}
        </div>
        <div className="mt-14 flex flex-col gap-12">
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="flex items-baseline gap-3 text-[22px] font-medium leading-tight tracking-[-0.02em] text-[#111]">
                <span className="font-mono text-[13px] tracking-[0.14em] text-[#111]/40 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-[16px] leading-[1.7] text-[#4b5563] [&_a]:text-[#111] [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>
      <RedesignFooter />
    </div>
  );
}
