/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
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
        background: "#F9FAFB", // Светлый фон
        textPrimary: "#111827", // Основной цвет текста
        accent: "#22C55E", // Акцент (зелёный)
        hoverAccent: "#A7F3D0", // Hover цвет
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro", "Montserrat", "Roboto", "Open Sans", "sans-serif"],
      },
      spacing: {
        section: "80px", // Отступы между секциями
        content: "40px", // Внутренние отступы
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};