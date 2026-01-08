// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#800020",
        gold: "#D4AF37",
        charcoal: "#3A3A3A",
        offwhite: "#FAF9F6",
      },
      fontFamily: {
        body: ["var(--font-geist-sans)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        luxury: "0 10px 30px rgba(0, 0, 0, 0.12)",
        card: "0 8px 25px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
