import type { Metadata } from "next";
import Link from "next/link";
import HomeNavigation from "@/app/components/redesign/HomeNavigation";
import RedesignFooter from "@/app/components/redesign/RedesignFooter";
import { buildOpenGraph } from "@/app/lib/seo";
import LaptopFrame from "./LaptopFrame";
import { WORK_PROJECTS, projectPath } from "./projects";

const PAGE_URL = "https://www.0ncode.com/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Systems OnCode designed, built, and still runs: websites, web apps, CRMs, and payment tools.",
  alternates: { canonical: PAGE_URL },
  openGraph: buildOpenGraph({
    url: PAGE_URL,
    title: "Work | OnCode",
    description:
      "Systems OnCode designed, built, and still runs. Open a project for the story.",
  }),
};

export default function WorkPage() {
  const count = String(WORK_PROJECTS.length).padStart(2, "0");

  return (
    <div className="relative min-h-screen bg-white">
      <HomeNavigation variant="inner" />
      <main className="mx-auto max-w-[1120px] px-6 pb-28 pt-28 min-[701px]:px-10 min-[701px]:pt-36">
        <div className="mb-16 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-[clamp(36px,6vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#111]">
              Work
            </h1>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.65] text-[#4b5563]">
              Systems we designed, built, and still run. Click a laptop for the
              story.
            </p>
          </div>
          <p className="mt-4 font-mono text-[13px] tracking-[0.14em] text-black/45 tabular-nums">
            {count}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 min-[800px]:grid-cols-2 min-[800px]:gap-x-16 min-[800px]:gap-y-24">
          {WORK_PROJECTS.map((project, index) => (
            <Link
              key={project.key}
              href={projectPath(project.key)}
              className="group block min-h-11 cursor-pointer text-inherit no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 min-[800px]:[&:nth-child(even)]:mt-24"
            >
              <LaptopFrame
                src={project.media}
                alt={`${project.title} on a laptop`}
                fit={project.mediaFit}
              />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#767676]">
                  {project.kind}
                </p>
                <p className="text-[12px] tracking-[0.08em] text-black/35 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <h2 className="mt-2 flex items-center gap-2 text-[22px] font-medium leading-tight tracking-[-0.02em] text-[#111]">
                {project.title}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </h2>
              <p className="mt-2 line-clamp-3 max-w-xl text-[15px] leading-relaxed text-[#4b5563]">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <RedesignFooter />
    </div>
  );
}
