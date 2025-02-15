import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        scifi1: "#002439",
        scifi2: "#005066",
        scifi3: "#4e7988",
        scifi4: "#78cce2",
        scifi5: "#e4eff0",
      },
      animation: {
        "fill-from-left": "fill 1s cubic-bezier(.47,.09,.12,.9)",
        "show-name": "show .5s linear forwards",
        "show-bg-line": "topdown .5s linear forwards",
        "slide-up": "slideup .5s linear forwards",
        "auto-rotate": "autorotate 30s linear infinite",
      },
      keyframes: {
        fill: {
          "0%": { transform: "translateX(-100%);" },
          "100%": { transform: "translateX(0)" },
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        topdown: {
          "0%": { bottom: "5000px" },
          "100%": { bottom: "0" },
        },
        slideup: {
          "0%": { transform: "translateY(30%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        autorotate: {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
