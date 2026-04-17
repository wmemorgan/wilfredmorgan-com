/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkbase: "#0F172A",
        gold: "#D4AF37",
        "gold-light": "#E8C84C",
        "gold-dim": "#A88B1C",
        cyber: "#38BDF8",
        "cyber-dim": "#0EA5E9",
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      fontFamily: {
        heading: ['"Public Sans"', "system-ui", "sans-serif"],
        body: ['"Source Serif 4"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "Consolas", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        marquee: "marquee 28s linear infinite",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        "line-grow": "lineGrow 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "1", textShadow: "0 0 20px rgba(212,175,55,0.4)" },
          "50%": { opacity: "0.8", textShadow: "0 0 40px rgba(212,175,55,0.8)" },
        },
        lineGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "grid-darkbase":
          "linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,175,55,0.15) 0%, transparent 60%)",
        "gold-edge":
          "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 50%, transparent 100%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
