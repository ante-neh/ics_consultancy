import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        euclid: ['Euclid Circular A', 'sans-serif'], 
      },
      lineHeight: {
        '20.29': '20.29px', 
      },
      letterSpacing: {
        '-0.03em': '-0.03em', 
      },
    },
  },
  plugins: [],
} satisfies Config;
