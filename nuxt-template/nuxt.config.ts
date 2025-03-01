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
});