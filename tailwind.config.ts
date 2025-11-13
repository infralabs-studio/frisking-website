import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{svg,png,jpg,jpeg}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#6A1B1A",
        gold: "#C5A572",
        charcoal: "#3A3A3A",
        offwhite: "#F8F8F8",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        heading: ['var(--font-geist-sans)', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'sans-serif'],
      },
      boxShadow: {
        luxury: "0 4px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
