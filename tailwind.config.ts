import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tv: "1921px",
    },
    extend: {
      maxWidth: {
        container: "1400px",
        "container-tv": "1600px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
      },
      fontSize: {
        "clamp-h1": "clamp(36px, 6vw, 96px)",
        "clamp-h2": "clamp(28px, 4vw, 56px)",
        "clamp-stat": "clamp(44px, 6vw, 88px)",
      },
      colors: {
        bg: {
          DEFAULT: "var(--black)",
          muted: "#1a1a1a",
          cream: "#F5F3EE",
        },
      },
      backgroundColor: {
        black: "var(--black)",
        "navy-deep": "var(--navy-deep)",
        "navy-mid": "var(--navy-mid)",
        "blue-dark": "var(--blue-dark)",
        accent: "var(--accent-orange)",
        "accent-hover": "var(--accent-orange-hover)",
        lime: "var(--accent-lime)",
        footer: "var(--footer-bg)",
      },
      textColor: {
        primary: "var(--white)",
        muted: "var(--muted)",
        accent: "var(--accent-orange)",
        lime: "var(--accent-lime)",
        ink: "var(--black)",
      },
      borderColor: {
        DEFAULT: "var(--muted)",
        accent: "var(--accent-orange)",
        lime: "var(--accent-lime)",
        "blue-dark": "var(--blue-dark)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
