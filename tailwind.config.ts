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
        navy: {
          950: "#0A0F1C",
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
        },
        gold: {
          DEFAULT: "#D4A853",
          light: "#E5BE7D",
          dark: "#B8913A",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        reading: "720px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "720px",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
