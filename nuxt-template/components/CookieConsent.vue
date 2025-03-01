<template>
    <div v-if="!accepted" class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 text-center">
      <p>This website uses cookies.</p>
      <button @click="acceptCookies" class="bg-green-500 px-4 py-2 rounded mt-2">Accept</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const accepted = ref(false);
  
  const acceptCookies = () => {
    accepted.value = true;
    localStorage.setItem("cookiesAccepted", "true");
  };
  </script>