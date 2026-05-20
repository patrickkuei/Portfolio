"use client";

import { ReactNode } from "react";

interface HeaderButtonProps {
  /** Button label content. */
  children: ReactNode;
  /** Sequential number displayed in the bottom-left corner. */
  no: number;
  /** Click handler — typically navigates to a URL. */
  onClick: () => void;
}

/**
 * Sticky header navigation button with a slide-up hover fill effect.
 * Shows a zero-padded sequence number in the bottom-left corner.
 */
export function HeaderButton({ children, no, onClick }: HeaderButtonProps) {
  return (
    <div
      className="relative grow h-full text-center border overflow-hidden border-scifi5/20 leading-[48px] backdrop-blur hover:cursor-pointer group"
      onClick={onClick}
    >
      <h2 className="transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        {children}
      </h2>
      <h2 className="bg-scifi5 text-black opacity-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100">
        {children}
      </h2>
      <span className="absolute bottom-0 left-1 text-xs text-white/50 transition-all duration-500 group-hover:text-black">
        {String(no).padStart(3, "0")}
      </span>
    </div>
  );
}
