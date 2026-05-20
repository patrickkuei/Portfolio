"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";
import { observerThresholds } from "@/src/resources";

interface ProjectCardProps {
  /** Image path relative to /public. */
  src: string;
  /** Alt text for the image. */
  alt: string;
  /** Optional additional classes for the `<Image>` element. */
  imgClassName?: string;
}

/**
 * Displays a project preview image with a gradient top border.
 * The border brightens when the card is scrolled into view.
 */
export function ProjectCard({ src, alt, imgClassName = "" }: ProjectCardProps) {
  const { divRef, isInView } = useIntersectionObserver(
    observerThresholds.image
  );

  return (
    <div
      ref={divRef}
      className="flex flex-col items-center w-[35vw] h-auto bg-gradient-to-r from-black via-neutral-700 to-black pb-2 rounded opacity-0 animate-slide-up [animation-delay:3s] group"
    >
      <div
        className={`h-1 w-full mb-4 bg-gradient-to-r from-black via-neutral-200 to-black transition-opacity duration-300 ${
          isInView ? "opacity-100" : "opacity-30"
        }`}
      />
      <Image
        className={`rounded ${imgClassName}`}
        src={src}
        alt={alt}
        width={600}
        height={600}
      />
    </div>
  );
}
