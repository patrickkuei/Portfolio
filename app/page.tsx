"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

const HeaderButton = ({
  children,
  no,
  onClick,
}: {
  children: ReactNode;
  no: number;
  onClick: () => void;
}) => {
  return (
    <div
      className={`relative grow h-full text-center border overflow-hidden border-scifi5/20 leading-[48px] backdrop-blur hover:cursor-pointer group`}
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
};

const DisplayedImg = ({
  src,
  imgClassName = "",
}: {
  src: string;
  imgClassName?: string;
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= 0.7);
      },
      {
        threshold: [0.7],
      }
    );

    const currentDivRef = divRef.current;

    if (currentDivRef) {
      observer.observe(currentDivRef);
    }

    return () => {
      if (currentDivRef) {
        observer.unobserve(currentDivRef);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`flex flex-col items-center w-[35vw] h-auto bg-gradient-to-r from-black via-neutral-700 to-black pb-2 rounded opacity-0 animate-slide-up [animation-delay:3s] group`}
    >
      <div
        className={`h-1 w-full mb-4 bg-gradient-to-r from-black via-neutral-200 to-black ${
          isInView ? "opacity-100" : "opacity-30"
        } transition-opacity duration-300`}
      />
      <Image
        className={`rounded ${imgClassName}`}
        src={src}
        alt={src}
        width={600}
        height={600}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 px-6 pt-4 gap-16 font-mono">
      <header className="flex min-h-12 h-12 min-w-full justify-center items-center bg-black">
        <div className="w-1/2 h-full leading-[48px] animate-fill-from-left bg-scifi5/10 backdrop-blur">
          <h2 className="opacity-0 ml-4 whitespace-nowrap animate-show-name [animation-delay:1s]">
            Shen-Kuei, Yang (Patrick)
          </h2>
        </div>
        <HeaderButton
          no={1}
          onClick={() => (window.location.href = "http://localhost:3000/")}
        >
          Work
        </HeaderButton>
        <HeaderButton
          no={2}
          onClick={() => window.open("https://github.com/PatrickKuei")}
        >
          Github
        </HeaderButton>
        <HeaderButton
          no={3}
          onClick={() =>
            window.open("https://www.linkedin.com/in/patrickyang-0a369415a/")
          }
        >
          Linkedin
        </HeaderButton>
        <HeaderButton
          no={4}
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/10OZMaoulWk2vmFian1lOS9EMJqadVNhaUwTFNB-n7ZU/edit?usp=sharing"
            )
          }
        >
          Resume
        </HeaderButton>
      </header>
      <main className="flex flex-col gap-20 items-center w-4/5 relative after:w-1 after:bg-white after:absolute after:top-[-64px] after:opacity-50 after:-z-10 after:animate-show-bg-line after:[animation-delay:1.7s]">
        <div className="bg-black w-fit h-fit">
          <div className="text-4xl text-white/50 py-20 opacity-0 animate-slide-up [animation-delay:2s]">
            <span>
              <span className="font-bold text-white">Engineer</span> with a
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
        <div className="w-full h-fit flex">
          <DisplayedImg src="/vyondGo.png" />
          <div className="flex-1 text-center my-auto opacity-0 animate-slide-up [animation-delay:3s]">
            some description
          </div>
        </div>
        <div className="w-full h-fit flex">
          <div className="flex-1 text-center my-auto opacity-0 animate-slide-up [animation-delay:3s]">
            some description
          </div>
          <DisplayedImg src="/loading.png" />
        </div>
        <div className="w-full h-fit flex">
          <DisplayedImg src="/quickEdit.png" />
          <div className="flex-1 text-center my-auto opacity-0 animate-slide-up [animation-delay:3.5s]">
            some description
          </div>
        </div>
        <div className="w-full h-fit flex">
          <div className="flex-1 text-center my-auto opacity-0 animate-slide-up [animation-delay:4s]">
            some description
          </div>
          <DisplayedImg src="/textToImage.png" />
        </div>
      </main>
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
