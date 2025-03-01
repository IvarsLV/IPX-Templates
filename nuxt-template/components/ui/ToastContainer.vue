<script setup>
import { useToast } from "@/composables/useToast";
import Toast from "./Toast.vue";

const { toasts, removeToast } = useToast();
</script>

<template>
  <div class="fixed top-5 right-5 z-50 flex flex-col gap-2">
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      :id="toast.id"
      :message="toast.message"
      :type="toast.type"
      :duration="toast.duration"
      @remove="removeToast"
    />
  </div>
</template>