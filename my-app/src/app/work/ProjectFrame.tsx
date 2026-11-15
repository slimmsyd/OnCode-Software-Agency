import LaptopFrame from "./LaptopFrame";
import ProjectMedia from "./ProjectMedia";
import { mediaFitClass, type WorkProject } from "./projects";

interface ProjectFrameProps {
  project: WorkProject;
  sizes?: string;
}

/**
 * Puts a project's media on the page. Stills go in the laptop chrome; screen
 * recordings already ship their own device mockup, so they sit on the page bare.
 */
export default function ProjectFrame({
  project,
  sizes = "(max-width: 800px) 100vw, 540px",
}: ProjectFrameProps) {
  if (project.mediaType !== "video") {
    return (
      <LaptopFrame
        src={project.media}
        alt={`${project.title} on a laptop`}
        fit={project.mediaFit}
      />
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden bg-white transition-transform duration-200 ease-out motion-reduce:transition-none group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
      <ProjectMedia
        project={project}
        sizes={sizes}
        className={`pointer-events-none select-none ${mediaFitClass(project.mediaFit)}`}
      />
    </div>
  );
}
