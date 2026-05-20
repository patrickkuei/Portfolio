import Image from "next/image";
import { person, social } from "@/src/resources";

/** Social links shown in the footer (excludes "Work" which is header-only). */
const footerLinks = social.filter((l) =>
  ["Github", "Linkedin", "Resume"].includes(l.label)
);

/**
 * Site footer with social links, contact info, and copyright notice.
 * All data is sourced from the `person` and `social` constants in resources.
 */
export function Footer() {
  return (
    <footer className="relative pb-20">
      {/* Social / doc links */}
      <div className="flex gap-10 justify-center mb-3">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <Image aria-hidden src={link.icon} alt={link.label} width={16} height={16} />
            {link.label === "Resume" ? "Resume →" : link.label}
          </a>
        ))}
      </div>

      {/* Contact info */}
      <div className="text-center mb-3 flex">
        <a
          href={`mailto:${person.email}`}
          className="mr-8 flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image aria-hidden src="/email.png" alt="email" width={16} height={16} />
          {person.email}
        </a>
        <span className="flex items-center gap-2">
          <Image aria-hidden src="/phone.png" alt="phone" width={16} height={16} />
          {person.phone}
        </span>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 text-white/50">
        © {person.copyrightYear} {person.name}. All rights reserved.
      </div>
    </footer>
  );
}
