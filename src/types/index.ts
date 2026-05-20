/**
 * Shared TypeScript types for the portfolio.
 * All data consumed by components should conform to these interfaces.
 */

/** A single technology entry with optional version label. */
export interface TechEntry {
  /** Technology name (e.g. "React"). */
  name: string;
  /** Optional version string (e.g. "v18.2.0"). */
  version?: string;
}

/** A grouped category of tech entries shown in a project description. */
export interface TechCategory {
  /** Category label (e.g. "Frontend", "Backend"). */
  label: string;
  /** Top-level items in this category. */
  items: TechEntry[];
  /** Optional nested sub-items (e.g. AWS services). */
  subItems?: TechEntry[];
}

/** A word in the project tagline that can be highlighted on scroll. */
export interface TaglineWord {
  text: string;
  /** When true, the word glows white when the section is in view. */
  highlight?: boolean;
}

/** A main Vyond portfolio project. */
export interface Project {
  /** Unique slug used as a React key. */
  id: string;
  /** Display title of the project. */
  title: string;
  /** Company and year label (e.g. "Vyond, '24"). */
  label: string;
  /** Path to the project preview image under /public. */
  image: string;
  /** Tagline words; highlighted words glow on scroll. */
  tagline: TaglineWord[];
  /** Grouped tech stack. */
  tech: TechCategory[];
  /** Layout order: "img-left" renders image then description, "img-right" is reversed. */
  layout: "img-left" | "img-right";
}

/** A side / indie project shown in the 3D carousel. */
export interface SideProject {
  /** Unique index used to drive carousel rotation (0-based). */
  position: number;
  /** Display title shown in the nav list and hover overlay. */
  title: string;
  /** Path to the project image under /public. */
  image: string;
  /** Top-level tech items. First item is highlighted. */
  tech: TechCategory[];
}

/** A navigation or social link shown in the header and footer. */
export interface NavLink {
  /** Visible label. */
  label: string;
  /** Destination URL. */
  href: string;
  /** Path to icon image under /public. */
  icon: string;
  /** When true the link opens in a new tab. */
  external?: boolean;
}

/** Owner / author info used in the hero, header, and footer. */
export interface Person {
  /** Full display name. */
  name: string;
  /** Short name shown in the sticky header. */
  shortName: string;
  /** Job title. */
  role: string;
  /** Contact email address. */
  email: string;
  /** Contact phone number. */
  phone: string;
  /** Copyright year. */
  copyrightYear: number;
}
