import Image from "next/image";
import { ReactNode } from "react";

const HeaderButton = ({
  children,
  no,
}: {
  children: ReactNode;
  no: number;
}) => {
  return (
    <div
      className={`relative grow h-full text-center border overflow-hidden border-scifi5/20 leading-[48px] backdrop-blur transition-all hover:cursor-pointer group`}
    >
      <h2 className="transition-all group-hover:-translate-y-full group-hover:opacity-0">
        {children}
      </h2>
      <h2 className="bg-scifi5 text-black opacity-0 transition-all group-hover:-translate-y-full group-hover:opacity-100">
        {children}
      </h2>
      <span className="absolute bottom-0 left-1 text-xs text-white/50 transition-all group-hover:text-black">
        {String(no).padStart(3, "0")}
      </span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 px-6 pt-4 gap-16 font-mono">
      <header className="flex min-h-12 h-12 min-w-full justify-center items-center">
        <div className="w-1/2 h-full leading-[48px] animate-fill-from-left bg-scifi5/10 backdrop-blur">
          <h2 className="opacity-0 ml-4 animate-show-name [animation-delay:2s]">
            Shen-Kuei, Yang (Patrick)
          </h2>
        </div>
        <HeaderButton no={1}>Work</HeaderButton>
        <HeaderButton no={2}>Github</HeaderButton>
        <HeaderButton no={3}>Linkedin</HeaderButton>
        <HeaderButton no={4}>Resume</HeaderButton>
      </header>
      <main className="flex flex-col gap-8 items-center"></main>
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-auto">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
