import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: "#FBEEE7",
          100: "#F5D6C4",
          300: "#E0A47F",
          500: "#C1613B",
          600: "#A54F2E",
          700: "#824023",
        },
        sea: {
          50: "#EAF6FB",
          100: "#CDEBF6",
          300: "#7FC3DE",
          500: "#2C7DA0",
          700: "#0E4C6B",
          900: "#0A3549",
        },
        sand: {
          50: "#FBF8F2",
          100: "#F7EFE0",
          200: "#EDE1CB",
          300: "#E2D2B3",
        },
        olive: {
          400: "#8A9A64",
          500: "#6B7A4F",
          700: "#4C5738",
        },
        sun: {
          400: "#F5C463",
          500: "#F2B84B",
          600: "#DE9F2E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        body: ["var(--font-inter)"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        // Tinted with sea-900 instead of neutral black so elevation reads
        // as part of the coastal palette rather than a generic UI shadow.
        card: "0 1px 2px rgba(10, 53, 73, 0.06), 0 14px 28px -14px rgba(10, 53, 73, 0.22)",
        "card-hover": "0 22px 44px -16px rgba(10, 53, 73, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
