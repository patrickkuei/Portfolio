/**
 * Single source of truth for all portfolio content.
 * Update this file to change any text, links, or project data across the site.
 */

import type { NavLink, Person, Project, SideProject } from "@/src/types";

/** Personal info used in the header, hero, and footer. */
export const person: Person = {
  name: "Shen-Kuei, Yang (Patrick)",
  shortName: "Shen-Kuei, Yang (Patrick)",
  role: "Software Engineer",
  email: "azureroki@gmail.com",
  phone: "+886-973-217-569",
  copyrightYear: 2024,
};

/** Navigation and social links used in the header and footer. */
export const social: NavLink[] = [
  {
    label: "Work",
    href: "http://portfolio-patrickkueis-projects.vercel.app/",
    icon: "/file.png",
    external: false,
  },
  {
    label: "Github",
    href: "https://github.com/PatrickKuei",
    icon: "/github.png",
    external: true,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/patrickyang-0a369415a/",
    icon: "/linkedin.png",
    external: true,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1uUVMEL-8m9vzs5l7V0A5HPDE1okqOv5r/view?usp=sharing",
    icon: "/file.png",
    external: true,
  },
];

/** Main Vyond projects shown in the scrolling work section. */
export const projects: Project[] = [
  {
    id: "vyond-go",
    title: "VyondGo",
    label: "Vyond, '24",
    image: "/vyondGo.png",
    tagline: [
      { text: "Next-gen" },
      { text: "AI", highlight: true },
      { text: "video creating tool" },
    ],
    layout: "img-left",
    tech: [
      {
        label: "Frontend",
        items: [
          { name: "React", version: "v18.2.0" },
          { name: "TypeScript" },
          { name: "Redux" },
          { name: "SCSS" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "Node.js" },
          { name: "RESTful API" },
          { name: "AWS" },
          { name: "Docker" },
        ],
        subItems: [
          { name: "SQS" },
          { name: "EC2" },
          { name: "EKS" },
          { name: "S3" },
        ],
      },
    ],
  },
  {
    id: "loading-page",
    title: "Brand New Loading Page",
    label: "Vyond, '23",
    image: "/loading.png",
    tagline: [
      { text: "Well" },
      { text: "expectant", highlight: true },
      { text: "instructions for users" },
    ],
    layout: "img-right",
    tech: [
      {
        label: "Frontend",
        items: [
          { name: "React", version: "v18.2.0" },
          { name: "TypeScript" },
          { name: "Redux" },
          { name: "SCSS" },
        ],
      },
    ],
  },
  {
    id: "quick-edit",
    title: "QuickEdit",
    label: "Vyond, '23",
    image: "/quickEdit.png",
    tagline: [
      { text: "Easy and fast to use" },
      { text: "video editor", highlight: true },
    ],
    layout: "img-left",
    tech: [
      {
        label: "Frontend",
        items: [
          { name: "React", version: "v18.2.0" },
          { name: "TypeScript" },
          { name: "Redux" },
          { name: "SCSS" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "Node.js" },
          { name: "RESTful API" },
          { name: "AWS" },
          { name: "Docker" },
        ],
        subItems: [
          { name: "SQS" },
          { name: "EC2" },
          { name: "EKS" },
          { name: "S3" },
        ],
      },
    ],
  },
  {
    id: "text-to-image",
    title: "Text to Image",
    label: "Vyond, '22",
    image: "/textToImage.png",
    tagline: [
      { text: "Anything creators need," },
      { text: "AI", highlight: true },
      { text: "generated assets" },
    ],
    layout: "img-right",
    tech: [
      {
        label: "Frontend",
        items: [
          { name: "React", version: "v18.2.0" },
          { name: "JavaScript" },
          { name: "React Flux" },
          { name: "Styled Component" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "Node.js" },
          { name: "RESTful API" },
          { name: "AWS" },
          { name: "Docker" },
        ],
        subItems: [{ name: "SQS" }, { name: "EC2" }, { name: "S3" }],
      },
    ],
  },
];

/** Side / indie projects shown in the 3D carousel. */
export const sideProjects: SideProject[] = [
  {
    position: 0,
    title: "Indie MMORPG",
    image: "/indieGame.png",
    tech: [
      {
        label: "Tools",
        items: [{ name: "Unity 2022.3.17f1" }, { name: "Aseprite" }, { name: "Github" }, { name: "DVC" }, { name: "PostgreSQL" }],
        subItems: [{ name: "C#" }, { name: "Mirror" }, { name: "Zenject" }],
      },
    ],
  },
  {
    position: 1,
    title: "MMORPG ft.ChatGPT",
    image: "/roGpt.png",
    tech: [
      {
        label: "Tools",
        items: [
          { name: "OpenAI API" },
          { name: "Ragnarok Private Server" },
          { name: "OpenKore" },
        ],
        subItems: [{ name: "LangChain" }, { name: "rAthena" }, { name: "MySQL" }, { name: "Perl" }],
      },
    ],
  },
  {
    position: 2,
    title: "UE5 Game Remake",
    image: "/ue5Ro.png",
    tech: [
      {
        label: "Tools",
        items: [{ name: "Unreal Engine 5" }, { name: "Blender 2.8" }],
        subItems: [{ name: "Blueprints" }],
      },
    ],
  },
  {
    position: 3,
    title: "Game Autoplay Plugin",
    image: "/autoGame.png",
    tech: [
      {
        label: "Tools",
        items: [{ name: "Quick Macro" }, { name: "Gameplay Pattern Analysis" }],
        subItems: [{ name: "Image Analysis" }, { name: "Color Finding" }],
      },
    ],
  },
];
