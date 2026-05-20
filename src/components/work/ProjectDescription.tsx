"use client";

import { Project } from "@/src/types";
import { GlowText } from "@/src/components/ui/GlowText";
import { TechStack } from "@/src/components/work/TechStack";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";
import { observerThresholds } from "@/src/resources";

interface ProjectDescriptionProps {
  /** Project data to display. */
  project: Project;
}

/**
 * Renders a project's title, company/year label, tagline, and tech stack.
 * Slides up on mount and highlights tagline words + tech entries when scrolled into view.
 * Replaces the four duplicated description components: GoDescription, LoadingDescription,
 * QeDescription, and T2iDescription.
 */
export function ProjectDescription({ project }: ProjectDescriptionProps) {
  const { divRef, isInView } = useIntersectionObserver(
    observerThresholds.description
  );

  return (
    <div
      ref={divRef}
      className="text-left my-auto opacity-0 w-[35vw] animate-slide-up [animation-delay:3s]"
    >
      <h2 className="text-2xl">{project.title}</h2>
      <br />
      <p className="text-white/50">
        <span className="text-white">{project.label}</span>
        {" — "}
        {project.tagline.map((word, i) =>
          word.highlight ? (
            <GlowText key={i} isVisible={isInView}>
              {word.text}
            </GlowText>
          ) : (
            <span key={i}>{word.text} </span>
          )
        )}
      </p>
      <br />
      <TechStack categories={project.tech} isInView={isInView} />
    </div>
  );
}
