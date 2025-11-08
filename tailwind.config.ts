import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retroYellow: "#FFFF99",
        retroBlue: "#3366CC",
        retroGray: "#CCCCCC",
      },
      boxShadow: {
        pixel: "0 0 0 2px #000",
        glow: "0 0 10px rgba(255,255,255,0.9)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".35" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255,255,255,0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(255,255,255,0.7)" },
        },
      },
      animation: {
        blink: "blink 1.4s steps(1,end) infinite",
        pulseGlow: "pulseGlow 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
