export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2025-03-01",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/components/ui",
      global: true,
    },
  ],
  runtimeConfig: {
    public: {
      apiBase: "http://127.0.0.1:8000/api",  // ВАЖНО: именно так
    },
  },
});