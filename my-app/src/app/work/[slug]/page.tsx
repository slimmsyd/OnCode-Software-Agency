import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HomeNavigation from "@/app/components/redesign/HomeNavigation";
import RedesignFooter from "@/app/components/redesign/RedesignFooter";
import { buildOpenGraph } from "@/app/lib/seo";
import { reviews } from "@/app/components/reviews";
import LaptopFrame from "../LaptopFrame";
import { WORK_PROJECTS, getProject, projectPath } from "../projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return WORK_PROJECTS.filter((project) => project.key !== "pos-extension").map(
    (project) => ({ slug: project.key }),
  );
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  const url = `https://www.0ncode.com${projectPath(project.key)}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: buildOpenGraph({
      url,
      title: `${project.title} | OnCode`,
      description: project.description,
    }),
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const index = WORK_PROJECTS.findIndex((project) => project.key === params.slug);
  const project = WORK_PROJECTS[index];
  if (!project || project.key === "pos-extension") notFound();

  const previous = WORK_PROJECTS[index - 1];
  const next = WORK_PROJECTS[index + 1];
  const related = (project.relatedKeys ?? [])
    .map((key) => getProject(key))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const review = project.story?.reviewName
    ? reviews.find((item) => item.name === project.story?.reviewName)
    : undefined;

  return (
    <div className="relative min-h-screen bg-white">
      <HomeNavigation variant="inner" />
      <main className="mx-auto max-w-[1120px] px-6 pb-28 pt-28 min-[701px]:px-10 min-[701px]:pt-36">
        <Link
          href="/work"
          className="mb-10 inline-flex min-h-11 cursor-pointer items-center text-[15px] font-medium text-[#4b5563] no-underline transition-colors duration-200 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          ← All work
        </Link>

        <div className="mx-auto max-w-[760px]">
          <LaptopFrame
            src={project.media}
            alt={`${project.title} on a laptop`}
            fit={project.mediaFit}
          />
          <p className="mb-3 mt-10 text-[11px] font-medium uppercase tracking-[0.14em] text-[#767676]">
            {project.kind}
          </p>
          <h1 className="text-[clamp(36px,5vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#111]">
            {project.title}
          </h1>
          {project.story ? (
            <div className="mt-10 grid max-w-xl gap-8">
              {(
                [
                  ["What it is", project.story.what],
                  ["Problem", project.story.problem],
                  ["Solution", project.story.solution],
                ] as const
              ).map(([heading, body]) => (
                <section key={heading}>
                  <h2 className="mb-2 text-[20px] font-semibold tracking-[-0.02em] text-[#111]">
                    {heading}
                  </h2>
                  <p className="text-[17px] leading-[1.65] text-[#4b5563]">{body}</p>
                </section>
              ))}
            </div>
          ) : (
            <p className="mt-4 max-w-xl text-[17px] leading-[1.65] text-[#4b5563]">
              {project.description}
            </p>
          )}
          {review ? (
            <blockquote className="mt-10 max-w-xl border-t border-black/10 pt-6">
              <p className="text-[17px] leading-[1.65] text-[#111]">&ldquo;{review.body}&rdquo;</p>
              <footer className="mt-3 text-[14px] text-[#4b5563]">
                {review.url ? (
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#111] underline-offset-4 hover:underline"
                  >
                    {review.name}
                  </a>
                ) : (
                  <span className="font-medium text-[#111]">{review.name}</span>
                )}
                <span> · Verified Google review</span>
              </footer>
            </blockquote>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 cursor-pointer items-center text-[15px] font-medium text-[#111] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Visit the live site
            </a>
          ) : null}
        </div>

        {related.length > 0 ? (
          <section
            aria-label="Related work"
            className="mt-20 border-t border-black/10 pt-8"
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#767676]">
              Related work
            </p>
            <ul className="flex flex-col gap-3">
              {related.map((item) => (
                <li key={item.key}>
                  <Link
                    href={projectPath(item.key)}
                    className="inline-flex min-h-11 cursor-pointer items-center text-[15px] font-semibold text-[#111] no-underline underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav
          aria-label="Other projects"
          className="mt-20 flex items-center justify-between gap-4 border-t border-black/10 pt-8"
        >
          {previous ? (
            <Link
              href={projectPath(previous.key)}
              className="inline-flex min-h-11 cursor-pointer items-center text-[15px] font-semibold no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              ← {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={projectPath(next.key)}
              className="inline-flex min-h-11 cursor-pointer items-center text-[15px] font-semibold no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {next.title} →
            </Link>
          ) : (
            <Link
              href="/work"
              className="inline-flex min-h-11 cursor-pointer items-center text-[15px] font-semibold no-underline"
            >
              All work
            </Link>
          )}
        </nav>
      </main>
      <RedesignFooter />
    </div>
  );
}
