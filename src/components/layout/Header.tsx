"use client";

import { person, social } from "@/src/resources";
import { HeaderButton } from "@/src/components/ui/HeaderButton";

/**
 * Sticky top navigation bar.
 * Shows the owner's name on the left and navigation buttons on the right.
 * Links are sourced from the `social` constant in resources.
 */
export function Header() {
  function handleNavClick(link: (typeof social)[number]) {
    if (link.external) {
      window.open(link.href);
    } else {
      window.location.href = link.href;
    }
  }

  return (
    <header className="flex min-h-12 h-12 min-w-full justify-center items-center bg-black sticky top-0 z-50">
      <div className="w-1/2 h-full leading-[48px] animate-fill-from-left bg-scifi5/10 backdrop-blur">
        <h2 className="opacity-0 ml-4 whitespace-nowrap animate-show-name [animation-delay:1s]">
          {person.shortName}
        </h2>
      </div>
      {social.map((link, i) => (
        <HeaderButton key={link.label} no={i + 1} onClick={() => handleNavClick(link)}>
          {link.label}
        </HeaderButton>
      ))}
    </header>
  );
}
