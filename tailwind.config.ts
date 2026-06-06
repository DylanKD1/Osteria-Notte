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
        charcoal: "#0e0e0e",
        surface: "#1a1a1a",
        offwhite: "#f5f0e8",
        gold: {
          DEFAULT: "#b8955a",
          muted: "#b8955a",
        },
        olive: "#2a2a1e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
