import type { Config } from "tailwindcss";
import plugin  from "tailwindcss/plugin"; 

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

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
  plugins: [Myclass],
} satisfies Config;
