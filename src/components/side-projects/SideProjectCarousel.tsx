"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sideProjects } from "@/src/resources";

/** Degrees rotated per frame (16 ms) for auto-rotation. */
const ROTATION_STEP = 0.192;

/** Degrees per carousel face (360 / number of items). */
const DEGREES_PER_FACE = 90;

/**
 * 3D rotating carousel for side / indie projects.
 * - Auto-rotates at ~12 RPM until the user clicks a project.
 * - Clicking outside the banner resumes auto-rotation.
 * - Hovering a selected face reveals its tech stack overlay.
 */
export function SideProjectCarousel() {
  const [shouldAuto, setShouldAuto] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentDegree, setCurrentDegree] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isHover, setIsHover] = useState<Record<number, boolean>>({});

  /** Snaps the carousel to the chosen project face and pauses auto-rotation. */
  function handleSelectProject(index: number) {
    setCurrentDegree(-index * DEGREES_PER_FACE);
    setShouldAuto(false);
    setSelectedProject(index);
  }

  /** Marks the currently selected face as hovered. */
  function handleBannerMouseEnter() {
    if (selectedProject === null) return;
    setIsHover((prev) => ({ ...prev, [selectedProject]: true }));
  }

  /** Clears the hover state for the currently selected face. */
  function handleBannerMouseLeave() {
    if (selectedProject === null) return;
    setIsHover((prev) => ({ ...prev, [selectedProject]: false }));
  }

  /* Auto-rotation: increments currentDegree every 16 ms (~60 fps). */
  useEffect(() => {
    if (!shouldAuto) return;
    const interval = setInterval(() => {
      setCurrentDegree((prev) => prev - ROTATION_STEP);
    }, 16);
    return () => clearInterval(interval);
  }, [shouldAuto]);

  /* Click-outside: resume auto-rotation when clicking outside the banner. */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setShouldAuto(true);
        setSelectedProject(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full text-center bg-black">
      <h2 className="text-2xl mt-20 mb-4">Side Project</h2>

      {/* Project navigation tabs */}
      <ul className="flex justify-center gap-6 text-white/50 mb-20">
        {sideProjects.map((project) => (
          <li
            key={project.position}
            className={`px-4 py-1 hover:cursor-pointer transition-all duration-300 hover:drop-shadow-[1px_0px_5px_#ffffff] ${
              selectedProject === project.position ? "text-white" : ""
            }`}
            onClick={() => handleSelectProject(project.position)}
          >
            {project.title}
          </li>
        ))}
      </ul>

      {/* 3D carousel stage */}
      <div
        id="banner"
        ref={bannerRef}
        className="text-center w-full h-[500px] relative"
        onMouseEnter={handleBannerMouseEnter}
        onMouseLeave={handleBannerMouseLeave}
      >
        <div
          id="slider"
          style={
            {
              "--quantity": sideProjects.length,
              transform: `perspective(1000px) rotateY(${currentDegree}deg)`,
            } as React.CSSProperties
          }
          className="absolute w-[400px] h-[200px] top-1/4 left-[calc(50%-200px)] [transform-style:preserve-3d] transition-all duration-300"
        >
          {sideProjects.map((project) => (
            <div
              key={project.position}
              className="item relative overflow-hidden"
              style={{ "--position": project.position + 1 } as React.CSSProperties}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Hover overlay with tech stack */}
              <div
                className={`absolute flex inset-0 bg-black/80 flex-col items-center justify-center transition-all duration-300 ${
                  isHover[project.position] ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="mb-2">{project.title}</h3>
                <div className="h-[1px] w-1/2 mb-1 bg-gradient-to-r from-black/5 via-neutral-200 to-black/5" />
                <ul className="text-[8px] text-white/50 text-left">
                  {project.tech.map((category) => (
                    <>
                      {category.items.map((item, i) => (
                        <li
                          key={item.name}
                          className={`before:content-['-'] before:mr-2 ${
                            i === 0
                              ? "text-white drop-shadow-[1px_0px_10px_#ffffff]"
                              : ""
                          }`}
                        >
                          {item.name}
                        </li>
                      ))}
                      {category.subItems && category.subItems.length > 0 && (
                        <ul className="indent-6 border-l border-white/30 ml-[2px]">
                          {category.subItems.map((sub) => (
                            <li
                              key={sub.name}
                              className="before:content-['-'] before:mr-2"
                            >
                              {sub.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
