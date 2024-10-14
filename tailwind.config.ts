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
        "fill-from-left": "fill 2s ease-in-out",
        "show-name": "show .5s linear forwards",
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
      },
    },
  },
  plugins: [],
};
export default config;
