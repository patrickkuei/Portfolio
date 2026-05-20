import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Patrick",
  lastName: "Yang",
  name: "Shen-Kuei Yang (Patrick)",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "azureroki@gmail.com",
  location: "Asia/Taipei",
  languages: ["English", "Mandarin"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Stay updated on my latest projects and thoughts on engineering.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PatrickKuei",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/patrickyang-0a369415a/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:azureroki@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building products people love to use</>,
  featured: {
    display: false,
    title: <>Featured work</>,
    href: "/work",
  },
  subline: (
    <>
      I&apos;m Patrick, a software engineer with 4+ years of experience building{" "}
      <Text as="span" size="xl" weight="strong">
        AI-powered
      </Text>{" "}
      web products at scale. I love crafting intuitive user experiences and clean, maintainable code.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Taiwan`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a Taiwan-based software engineer with a passion for building products that sit at
        the intersection of great engineering and great user experience. I&apos;ve spent 4+ years
        shipping AI-powered video creation tools at Vyond, working across the full stack — from
        React frontends to Node.js APIs and AWS infrastructure. Outside of work, I explore game
        development and indie projects.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vyond",
        timeframe: "2021 - 2025",
        role: "Software Engineer",
        achievements: [
          <>
            Built <strong>VyondGo</strong>, a next-gen AI video creation tool from the ground up
            using React, TypeScript, and Redux, serving thousands of creators globally.
          </>,
          <>
            Developed <strong>QuickEdit</strong>, a fast inline video editor that reduced user
            editing time, integrating with SQS-based rendering pipelines on AWS.
          </>,
          <>
            Shipped <strong>Text to Image</strong>, an AI asset generation feature powered by
            diffusion models, enabling creators to generate custom visuals on demand.
          </>,
          <>
            Redesigned the <strong>loading page</strong> experience with animated instructions that
            reduced user drop-off during video rendering waits.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "National Taiwan University of Science and Technology",
        description: <>B.S. in Computer Science and Information Engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Building polished, performant UIs with React, TypeScript, Redux, and SCSS — from design
            systems to complex interactive editors.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud",
        description: (
          <>
            Scalable APIs and async pipelines with Node.js, RESTful services, Docker, and AWS (SQS,
            EC2, EKS, S3).
          </>
        ),
        tags: [
          { name: "Node.js", icon: "node" },
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Game Development",
        description: (
          <>
            Indie game development with Unity (C#, Mirror networking, Zenject DI) and Unreal Engine
            5 (Blueprints, Blender assets).
          </>
        ),
        tags: [
          { name: "Unity", icon: "unity" },
          { name: "C#", icon: "csharp" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and product...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
