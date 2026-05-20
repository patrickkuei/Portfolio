"use client";

import { ElementType, ReactNode } from "react";

interface GlowTextProps {
  /** Content to render inside the element. */
  children: ReactNode;
  /** When true, applies a white glow drop-shadow. */
  isVisible: boolean;
  /** HTML tag to render. Defaults to `span`. */
  as?: ElementType;
  /** Additional Tailwind classes. */
  className?: string;
}

/**
 * Renders children with an animated white glow when `isVisible` is true.
 * Replaces the repeated inline conditional pattern:
 * `isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""`
 */
export function GlowText({
  children,
  isVisible,
  as: Tag = "span",
  className = "",
}: GlowTextProps) {
  return (
    <Tag
      className={`transition-colors duration-300 ${
        isVisible ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
