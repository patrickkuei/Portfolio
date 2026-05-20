import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Patrick",
  lastName: "Yang",
  name: "Shen-Kuei Yang (Patrick)",
  role: "Full-Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "azureroki@gmail.com",
  location: "Asia/Tokyo",
  languages: ["English", "Mandarin", "Japanese"],
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
    link: "https://github.com/patrickkuei",
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
      I&apos;m Patrick, a full-stack engineer with 5+ years of experience building{" "}
      <Text as="span" size="xl" weight="strong">
        AI-powered
      </Text>{" "}
      products at scale. Early AI agent adopter since 2022, leveraging LLM-powered workflows to
      ship faster and smarter.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Tokyo, Japan`,
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
        I&apos;m a Tokyo-based full-stack engineer with 5+ years of experience shipping
        AI-powered products. At Vyond, I led the flagship Text-to-Video product from concept to
        production, driving company revenue from below-target to consistently exceeding goals by
        5%+. I&apos;ve been building with LLMs and agentic workflows since 2022 — not as a
        buzzword, but as a genuine force multiplier for delivery and testing.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vyond",
        timeframe: "Jan 2022 – Present",
        role: "Software Engineer",
        achievements: [
          <>
            Led flagship <strong>Text-to-Video</strong> product from concept to production,
            transforming company revenue from below-target to consistently exceeding goals by{" "}
            <strong>5%+</strong> with <strong>90%+</strong> user satisfaction.
          </>,
          <>
            Pioneered hook-based architecture adoption across <strong>50+ engineers</strong>,
            replacing legacy patterns and establishing reusable components adopted company-wide.
            Optimized rendering from <strong>4,000 re-renders to 1</strong>.
          </>,
          <>
            Rebuilt testing infrastructure from <strong>0% to 80% coverage</strong> via
            AI-assisted development, integrating Jest into CI pipeline.
          </>,
          <>
            Mentored <strong>6 engineers</strong> including 2 senior leads, established
            company&apos;s first frontend documentation, and drove TypeScript adoption across teams.
          </>,
        ],
        images: [],
      },
      {
        company: "Varmeego",
        timeframe: "Aug 2020 – Aug 2021",
        role: "Software Engineer",
        achievements: [
          <>
            Led team of 3 in full-stack development (React, React Native, Angular, Java Spring
            Boot); reduced codebase duplication by <strong>50%</strong> through refactoring and
            delivered all projects on schedule with high customer satisfaction.
          </>,
        ],
        images: [],
      },
      {
        company: "DISCO Corporation & Win Semiconductor",
        timeframe: "Apr 2017 – Aug 2019",
        role: "Engineer",
        achievements: [
          <>
            Built web-based HR management system replacing legacy Excel workflows, improving
            operational efficiency by <strong>70%</strong>.
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
        name: "Chung Yuan Christian University",
        description: (
          <>B.S. in Biomedical Engineering (Information Technology), 2015.</>
        ),
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
            Building polished, performant UIs with React, TypeScript, Redux, and SCSS — from
            design systems to complex interactive editors.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React Native", icon: "react" },
          { name: "Angular", icon: "angular" },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud",
        description: (
          <>
            Scalable APIs and async pipelines with Node.js, Java Spring Boot, Docker, and AWS
            (SQS, EC2, EKS, S3).
          </>
        ),
        tags: [
          { name: "Node.js", icon: "node" },
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
          { name: "Java Spring Boot", icon: "java" },
        ],
        images: [],
      },
      {
        title: "AI & Automation",
        description: (
          <>
            Early AI agent adopter since 2022. Building LLM-powered agentic workflows with
            LangChain, OpenAI, Gemini, and Claude APIs — including MCP integrations and
            AI-assisted development pipelines.
          </>
        ),
        tags: [
          { name: "LangChain", icon: "langchain" },
          { name: "OpenAI API", icon: "openai" },
          { name: "Claude API", icon: "anthropic" },
          { name: "MCP", icon: "mcp" },
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
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
