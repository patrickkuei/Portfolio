"use client";

import { TechCategory } from "@/src/types";
import { GlowText } from "@/src/components/ui/GlowText";

interface TechStackProps {
  /** Grouped technology categories to render. */
  categories: TechCategory[];
  /** When true, the first item of each category glows white. */
  isInView: boolean;
}

/**
 * Renders a nested tech stack list grouped by category.
 * The first item in each category is highlighted via `GlowText` when in view.
 * Sub-items are indented under a border-left.
 */
export function TechStack({ categories, isInView }: TechStackProps) {
  return (
    <ul className="text-sm text-white/50">
      {categories.map((category) => (
        <li key={category.label}>
          {category.label}
          <ul className="indent-6 border-l-2 border-white/30 ml-1">
            {category.items.map((item, i) => (
              <li key={item.name} className="before:content-['-'] before:mr-2 mb-1">
                {i === 0 ? (
                  <GlowText isVisible={isInView}>
                    {item.version ? `${item.name} ${item.version}` : item.name}
                  </GlowText>
                ) : (
                  <>{item.version ? `${item.name} ${item.version}` : item.name}</>
                )}
              </li>
            ))}
            {category.subItems && category.subItems.length > 0 && (
              <ul className="indent-6 border-l-2 border-white/30 ml-7">
                {category.subItems.map((sub) => (
                  <li key={sub.name} className="before:content-['-'] before:mr-2">
                    {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
}
