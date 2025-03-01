<template>
    <div class="flex flex-col min-h-screen bg-background text-textPrimary">
      <Header />
      <main class="flex-1 container mx-auto px-4 py-8">
        <slot />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import ToastContainer from "@/components/ui/ToastContainer.vue";
  </script>