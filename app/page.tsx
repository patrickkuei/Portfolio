"use client";

import { useEffect } from "react";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { ProjectSection } from "@/src/components/sections/ProjectSection";
import { SideProjectCarousel } from "@/src/components/side-projects/SideProjectCarousel";

/**
 * Portfolio home page.
 * Composes layout and section components — contains no business logic or data.
 */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen px-6 pt-4 gap-16 font-mono">
      <Header />
      <main className="flex flex-col gap-20 items-center w-4/5 relative after:w-1 after:bg-white after:absolute after:top-[-64px] after:opacity-50 after:-z-10 after:animate-show-bg-line after:[animation-delay:1.7s]">
        <HeroSection />
        <ProjectSection />
        <SideProjectCarousel />
      </main>
      <Footer />
    </div>
  );
}
