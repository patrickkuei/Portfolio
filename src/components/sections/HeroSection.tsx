/**
 * Hero / intro section with the portfolio tagline.
 * Slides up after a short delay to create an entry animation.
 */
export function HeroSection() {
  return (
    <div className="bg-black w-fit h-fit">
      <div className="text-4xl text-white/50 py-20 opacity-0 animate-slide-up [animation-delay:2s]">
        <span>
          An <span className="font-bold text-white">Engineer</span> with
          designer&apos;s mindset,
        </span>
        <br />
        <span>
          Creating{" "}
          <span className="font-bold text-white">design-driven</span>{" "}
          industrial products.
        </span>
      </div>
    </div>
  );
}
