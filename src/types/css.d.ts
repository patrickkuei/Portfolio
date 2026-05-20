/** Allows TypeScript to resolve CSS file imports without type errors. */
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
