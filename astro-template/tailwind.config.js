/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontSize: {
        h1: "56px",
        h2: "40px",
        h3: "32px",
        p: "18px",
        button: "16px",
      },
      lineHeight: {
        normal: "1.5",
        relaxed: "1.6",
      },
      colors: {
        background: "#F9FAFB",
        textPrimary: "#111827",
        accent: "#22C55E",
        hoverAccent: "#A7F3D0",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro", "Montserrat", "Roboto", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};