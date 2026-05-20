/**
 * Design token configuration for the portfolio.
 * Centralizes theme decisions: color roles, animation timings, and spacing.
 * Values here are consumed by tailwind.config.ts and globals.css.
 */

/** Semantic color role mapping to Tailwind class suffixes. */
export const colors = {
  /** Primary text — full white. */
  primary: "white",
  /** Secondary text — 50% white opacity. */
  secondary: "white/50",
  /** Tertiary / border — 30% white opacity. */
  tertiary: "white/30",
  /** Brand accent used for hover fills and highlights. */
  brand: "scifi5",
} as const;

/** Animation entry delays (seconds) keyed by element role. */
export const animationDelays = {
  /** Hero tagline. */
  hero: "2s",
  /** Project description and image panels. */
  projectEntry: "3s",
  /** Header name reveal. */
  headerName: "1s",
  /** Background line. */
  bgLine: "1.7s",
} as const;

/** Intersection observer thresholds for triggering scroll animations. */
export const observerThresholds = {
  /** Used by DisplayedImg — triggers at 70% visibility. */
  image: 0.7,
  /** Used by ProjectDescription — triggers at 100% visibility. */
  description: 1,
} as const;
