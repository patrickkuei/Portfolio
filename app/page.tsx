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

const useIntersectionObserver = (threshold: number) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= threshold);
      },
      {
        threshold: [threshold],
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
  }, [threshold]);

  return { divRef, isInView };
};

const DisplayedImg = ({
  src,
  imgClassName = "",
}: {
  src: string;
  imgClassName?: string;
}) => {
  const { divRef, isInView } = useIntersectionObserver(0.7);

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

const GoDescription = () => {
  const { divRef, isInView } = useIntersectionObserver(1);

  return (
    <div
      ref={divRef}
      className="text-left my-auto opacity-0 w-[35vw] animate-slide-up [animation-delay:3s]"
    >
      <h2 className="text-2xl">VyondGo</h2>
      <br />
      <p className="text-white/50">
        <span className="text-white">Vyond, &apos;24</span> — Next-gen{" "}
        <span
          className={`transition-colors duration-300 ${
            isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
          }`}
        >
          AI
        </span>{" "}
        video creating tool
      </p>
      <br />
      <ul className="text-sm text-white/50">
        <li>Frontend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            React v18.2.0
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">TypeScript</li>
          <li className="before:content-['-'] before:mr-2 mb-1">Redux</li>
          <li className="before:content-['-'] before:mr-2 mb-1">SCSS</li>
        </ul>
        <li>Backend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            Node.js
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">RESTful API</li>
          <li className="before:content-['-'] before:mr-2 mb-1">AWS</li>
          <ul className="indent-6 border-l-2 border-white/30 ml-7">
            <li className="before:content-['-'] before:mr-2">SQS</li>
            <li className="before:content-['-'] before:mr-2">EC2</li>
            <li className="before:content-['-'] before:mr-2">EKS</li>
            <li className="before:content-['-'] before:mr-2">S3</li>
          </ul>
          <li className="before:content-['-'] before:mr-2 mb-1">Docker</li>
        </ul>
      </ul>
    </div>
  );
};

const LoadingDescription = () => {
  const { divRef, isInView } = useIntersectionObserver(1);

  return (
    <div
      ref={divRef}
      className="text-left my-auto opacity-0 w-[35vw] animate-slide-up [animation-delay:3s]"
    >
      <h2 className="text-2xl">Brand New Loading Page</h2>
      <br />
      <p className="text-white/50">
        <span className="text-white">Vyond, &apos;23</span> — Well{" "}
        <span
          className={`transition-colors duration-300 ${
            isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
          }`}
        >
          expectant
        </span>{" "}
        instructions for users
      </p>
      <br />
      <ul className="text-sm text-white/50">
        <li>Frontend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            React v18.2.0
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">TypeScript</li>
          <li className="before:content-['-'] before:mr-2 mb-1">Redux</li>
          <li className="before:content-['-'] before:mr-2 mb-1">SCSS</li>
        </ul>
      </ul>
    </div>
  );
};

const QeDescription = () => {
  const { divRef, isInView } = useIntersectionObserver(1);

  return (
    <div
      ref={divRef}
      className="text-left my-auto opacity-0 w-[35vw] animate-slide-up [animation-delay:3s]"
    >
      <h2 className="text-2xl">QuickEdit</h2>
      <br />
      <p className="text-white/50">
        <span className="text-white">Vyond, &apos;23</span> — Easy and fast to
        use{" "}
        <span
          className={`transition-colors duration-300 ${
            isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
          }`}
        >
          video editor
        </span>{" "}
      </p>
      <br />
      <ul className="text-sm text-white/50">
        <li>Frontend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            React v18.2.0
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">TypeScript</li>
          <li className="before:content-['-'] before:mr-2 mb-1">Redux</li>
          <li className="before:content-['-'] before:mr-2 mb-1">SCSS</li>
        </ul>
        <li>Backend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            Node.js
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">RESTful API</li>
          <li className="before:content-['-'] before:mr-2 mb-1">AWS</li>
          <ul className="indent-6 border-l-2 border-white/30 ml-7">
            <li className="before:content-['-'] before:mr-2">SQS</li>
            <li className="before:content-['-'] before:mr-2">EC2</li>
            <li className="before:content-['-'] before:mr-2">EKS</li>
            <li className="before:content-['-'] before:mr-2">S3</li>
          </ul>
          <li className="before:content-['-'] before:mr-2 mb-1">Docker</li>
        </ul>
      </ul>
    </div>
  );
};

const T2iDescription = () => {
  const { divRef, isInView } = useIntersectionObserver(1);

  return (
    <div
      ref={divRef}
      className="text-left my-auto opacity-0 w-[35vw] animate-slide-up [animation-delay:3s]"
    >
      <h2 className="text-2xl">Text to Image</h2>
      <br />
      <p className="text-white/50">
        <span className="text-white drop-shadow-[1px_0px_10px_#ffffff]">
          Vyond, &apos;22
        </span>{" "}
        — Anything creators need,{" "}
        <span
          className={`transition-colors duration-300 ${
            isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
          }`}
        >
          AI
        </span>{" "}
        generated assets
      </p>
      <br />
      <ul className="text-sm text-white/50">
        <li>Frontend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            React v18.2.0
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">JavaScript</li>
          <li className="before:content-['-'] before:mr-2 mb-1">React Flux</li>
          <li className="before:content-['-'] before:mr-2 mb-1">
            Styled Component
          </li>
        </ul>
        <li>Backend</li>
        <ul className="indent-6 border-l-2 border-white/30 ml-1">
          <li
            className={`before:content-['-'] before:mr-2 mb-1 transition-colors duration-300 ${
              isInView ? "text-white drop-shadow-[1px_0px_10px_#ffffff]" : ""
            }`}
          >
            Node.js
          </li>
          <li className="before:content-['-'] before:mr-2 mb-1">RESTful API</li>
          <li className="before:content-['-'] before:mr-2 mb-1">AWS</li>
          <ul className="indent-6 border-l-2 border-white/30 ml-7">
            <li className="before:content-['-'] before:mr-2">SQS</li>
            <li className="before:content-['-'] before:mr-2">EC2</li>
            <li className="before:content-['-'] before:mr-2">S3</li>
          </ul>
          <li className="before:content-['-'] before:mr-2 mb-1">Docker</li>
        </ul>
      </ul>
    </div>
  );
};

const SideProject = () => {
  const [shouldAuto, setShouldAuto] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentDegree, setCurrentDegree] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleClick = (item: number) => {
    setCurrentDegree(-item * 90);
    setShouldAuto(false);
    setSelectedProject(item);
  };

  useEffect(() => {
    const interval =
      shouldAuto &&
      setInterval(() => {
        setCurrentDegree((prev) => prev - 0.192);
      }, 16);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [shouldAuto]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bannerRef.current &&
        !bannerRef.current.contains(event.target as HTMLElement)
      ) {
        setShouldAuto(true);
        setSelectedProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [bannerRef]);

  const [isHover, setIsHover] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleImgHover = () => {
    if (selectedProject === null) return;
    setIsHover((prev) => ({ ...prev, [selectedProject]: true }));
  };

  const handleImgLeave = () => {
    if (selectedProject === null) return;
    setIsHover((prev) => ({ ...prev, [selectedProject]: false }));
  };

  return (
    <div className="w-full text-center bg-black">
      <h2 className="text-2xl mt-20 mb-4">Side Project</h2>
      <ul className="flex justify-center gap-6 text-white/50 mb-20">
        <li
          className={`px-4 py-1 hover:cursor-pointer transition-all duration-300 hover:drop-shadow-[1px_0px_5px_#ffffff] ${
            selectedProject === 0 ? "text-white" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          Indie MMORPG
        </li>
        <li
          className={`px-4 py-1 hover:cursor-pointer transition-all duration-300 hover:drop-shadow-[1px_0px_5px_#ffffff] ${
            selectedProject === 1 ? "text-white" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          MMORPG ft.ChatGPT
        </li>
        <li
          className={`px-4 py-1 hover:cursor-pointer transition-all duration-300 hover:drop-shadow-[1px_0px_5px_#ffffff] ${
            selectedProject === 2 ? "text-white" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          UE5 Game Remake
        </li>
        <li
          className={`px-4 py-1 hover:cursor-pointer transition-all duration-300 hover:drop-shadow-[1px_0px_5px_#ffffff] ${
            selectedProject === 3 ? "text-white" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          Game Autoplay Plugin
        </li>
      </ul>
      <div
        id="bannder"
        ref={bannerRef}
        className="text-center w-full h-[500px] relative"
        onMouseEnter={handleImgHover}
        onMouseLeave={handleImgLeave}
      >
        <div
          id="slider"
          style={
            {
              "--quantity": 4,
              transform: `perspective(1000px) rotateY(${currentDegree}deg)`,
            } as React.CSSProperties
          }
          className={`absolute w-[400px] h-[200px] top-1/4 left-[calc(50%-200px)] [transform:perspective(1000px)] [transform-style:preserve-3d] transition-all duration-300`}
        >
          <div
            className="item relative overflow-hidden"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <Image
              src="/indieGame.png"
              alt="indieGame"
              fill={true}
              className="object-cover"
            />
            <div
              className={`absolute flex inset-0 bg-black/80 flex-col items-center justify-center ${
                isHover[0] ? "opacity-100" : "opacity-0"
              } transition-all duration-300`}
            >
              <h3 className="mb-2">Indie MMORPG</h3>
              <div
                className={`h-[1px] w-1/2 mb-1 bg-gradient-to-r from-black/5 via-neutral-200 to-black/5`}
              />
              <ul className="text-[8px] text-white/50 text-left">
                <li
                  className={`before:content-['-'] before:mr-2 text-white drop-shadow-[1px_0px_10px_#ffffff]`}
                >
                  Unity 2022.3.17f1
                </li>
                <ul className="indent-6 border-l border-white/30 ml-[2px]">
                  <li className="before:content-['-'] before:mr-2">C#</li>
                  <li className="before:content-['-'] before:mr-2">Mirror</li>
                  <li className="before:content-['-'] before:mr-2">Zenject</li>
                </ul>
                <li className="before:content-['-'] before:mr-2">Aseprite</li>
                <li className="before:content-['-'] before:mr-2">Github</li>
                <li className="before:content-['-'] before:mr-2">DVC</li>
                <li className="before:content-['-'] before:mr-2">PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div
            className="item relative overflow-hidden"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <Image
              src="/roGpt.png"
              alt="roGpt"
              fill={true}
              className="object-cover"
            />
            <div
              className={`absolute flex inset-0 bg-black/80 flex-col items-center justify-center ${
                isHover[1] ? "opacity-100" : "opacity-0"
              } transition-all duration-300`}
            >
              <h3 className="mb-2">MMORPG ft.ChatGPT</h3>
              <div
                className={`h-[1px] w-1/2 mb-1 bg-gradient-to-r from-black/5 via-neutral-200 to-black/5`}
              />
              <ul className="text-[8px] text-white/50 text-left">
                <li
                  className={`before:content-['-'] before:mr-2 text-white drop-shadow-[1px_0px_10px_#ffffff]`}
                >
                  OpenAI API
                </li>
                <ul className="indent-6 border-l border-white/30 ml-[2px]">
                  <li className="before:content-['-'] before:mr-2">
                    LangChain
                  </li>
                </ul>
                <li className="before:content-['-'] before:mr-2">
                  Ragnarok Private Server
                </li>
                <ul className="indent-6 border-l border-white/30 ml-[2px]">
                  <li className="before:content-['-'] before:mr-2">rAthena</li>
                  <li className="before:content-['-'] before:mr-2">MySQL</li>
                </ul>
                <li className="before:content-['-'] before:mr-2">OpenKore</li>
                <ul className="indent-6 border-l border-white/30 ml-[2px]">
                  <li className="before:content-['-'] before:mr-2">Perl</li>
                </ul>
              </ul>
            </div>
          </div>
          <div
            className="item relative overflow-hidden"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <Image
              src="/ue5Ro.png"
              alt="ue5Ro"
              fill={true}
              className="object-cover"
            />
            <div
              className={`absolute flex inset-0 bg-black/80 flex-col items-center justify-center ${
                isHover[2] ? "opacity-100" : "opacity-0"
              } transition-all duration-300`}
            >
              <h3 className="mb-2">UE5 Game Remake</h3>
              <div
                className={`h-[1px] w-1/2 mb-1 bg-gradient-to-r from-black/5 via-neutral-200 to-black/5`}
              />
              <ul className="text-[8px] text-white/50 text-left">
                <li
                  className={`before:content-['-'] before:mr-2 text-white drop-shadow-[1px_0px_10px_#ffffff]`}
                >
                  Unreal Engine 5
                </li>
                <ul className="indent-6 border-l border-white/30 ml-[2px]">
                  <li className="before:content-['-'] before:mr-2">
                    Blueprints
                  </li>
                </ul>
                <li className="before:content-['-'] before:mr-2">
                  Blender 2.8
                </li>
              </ul>
            </div>
          </div>
          <div
            className="item relative overflow-hidden"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <Image
              src="/autoGame.png"
              alt="autoGame"
              fill={true}
              className="object-cover"
            />
            <div
              className={`absolute flex inset-0 bg-black/80 flex-col items-center justify-center ${
                isHover[3] ? "opacity-100" : "opacity-0"
              } transition-all duration-300`}
            >
              <h3 className="mb-2">Game Autoplay Plugin</h3>
              <div
                className={`h-[1px] w-1/2 mb-1 bg-gradient-to-r from-black/5 via-neutral-200 to-black/5`}
              />
              <ul className="text-[8px] text-white/50 text-left">
                <li
                  className={`before:content-['-'] before:mr-2 text-white drop-shadow-[1px_0px_10px_#ffffff]`}
                >
                  Quick Macro
                </li>
                <ul className="indent-6 border-l border-white/30 ml-[2px]">
                  <li className="before:content-['-'] before:mr-2">
                    Image Analysis
                  </li>
                  <li className="before:content-['-'] before:mr-2">
                    Color Finding
                  </li>
                </ul>
                <li className="before:content-['-'] before:mr-2">
                  Gameplay Pattern Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen px-6 pt-4 gap-16 font-mono">
      <header className="flex min-h-12 h-12 min-w-full justify-center items-center bg-black">
        <div className="w-1/2 h-full leading-[48px] animate-fill-from-left bg-scifi5/10 backdrop-blur">
          <h2 className="opacity-0 ml-4 whitespace-nowrap animate-show-name [animation-delay:1s]">
            Shen-Kuei, Yang (Patrick)
          </h2>
        </div>
        <HeaderButton
          no={1}
          onClick={() =>
            (window.location.href =
              "http://portfolio-patrickkueis-projects.vercel.app/")
          }
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
              "https://drive.google.com/file/d/1uUVMEL-8m9vzs5l7V0A5HPDE1okqOv5r/view?usp=sharing"
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
              An <span className="font-bold text-white">Engineer</span> with
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
        <div className="w-full h-fit flex justify-between">
          <DisplayedImg src="/vyondGo.png" />
          <GoDescription />
        </div>
        <div className="w-full h-fit flex justify-between">
          <LoadingDescription />
          <DisplayedImg src="/loading.png" />
        </div>
        <div className="w-full h-fit flex justify-between">
          <DisplayedImg src="/quickEdit.png" />
          <QeDescription />
        </div>
        <div className="w-full h-fit flex justify-between">
          <T2iDescription />
          <DisplayedImg src="/textToImage.png" />
        </div>
        <SideProject />
      </main>
      <footer className="relative pb-20">
        <div className="flex gap-10 justify-center mb-3">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/PatrickKuei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.png"
              alt="github"
              width={16}
              height={16}
            />
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/patrickyang-0a369415a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.png"
              alt="linkedin"
              width={16}
              height={16}
            />
            Linkedin
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://drive.google.com/file/d/1uUVMEL-8m9vzs5l7V0A5HPDE1okqOv5r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.png"
              alt="resume"
              width={16}
              height={16}
            />
            Resume →
          </a>
        </div>
        <div className="text-center mb-3 flex">
          <a
            href="mailto:azureroki@gmail.com"
            className="mr-8 flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/email.png"
              alt="email"
              width={16}
              height={16}
            />
            azureroki@gmail.com
          </a>
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="/phone.png"
              alt="phone"
              width={16}
              height={16}
            />
            +886-973-217-569
          </span>
        </div>
        <div className="absolute bottom-4 text-white/50">
          © 2024 Shen-Kuei Yang. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
