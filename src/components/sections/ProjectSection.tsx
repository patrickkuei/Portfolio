import { projects } from "@/src/resources";
import { ProjectCard } from "@/src/components/work/ProjectCard";
import { ProjectDescription } from "@/src/components/work/ProjectDescription";

/**
 * Scrolling work section.
 * Maps over the `projects` constant and renders alternating
 * image-left / image-right layouts for each project.
 */
export function ProjectSection() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="w-full h-fit flex justify-between">
          {project.layout === "img-left" ? (
            <>
              <ProjectCard src={project.image} alt={project.title} />
              <ProjectDescription project={project} />
            </>
          ) : (
            <>
              <ProjectDescription project={project} />
              <ProjectCard src={project.image} alt={project.title} />
            </>
          )}
        </div>
      ))}
    </>
  );
}
