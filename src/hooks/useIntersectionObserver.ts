"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observes a DOM element and tracks whether it meets the given visibility threshold.
 *
 * @param threshold - Fraction of the element that must be visible to set `isInView` true (0–1).
 * @returns An object with `divRef` to attach to the target element and `isInView` state.
 *
 * @example
 * const { divRef, isInView } = useIntersectionObserver(0.7);
 * return <div ref={divRef} className={isInView ? "visible" : "hidden"} />;
 */
export function useIntersectionObserver(threshold: number) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= threshold);
      },
      { threshold: [threshold] }
    );

    const el = divRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return { divRef, isInView };
}
