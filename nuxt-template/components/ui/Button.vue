<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
});

const classes = computed(() => [
  "rounded-lg font-medium transition-all duration-200 focus:ring-2",
  props.size === "sm" ? "text-sm px-4 py-1" : "",
  props.size === "md" ? "text-base px-6 py-2" : "",
  props.size === "lg" ? "text-lg px-8 py-3" : "",
  props.variant === "primary" ? "text-white bg-accent hover:bg-hoverAccent focus:ring-accent" : "",
  props.variant === "secondary" ? "text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400" : "",
  props.variant === "danger" ? "text-white bg-red-500 hover:bg-red-600 focus:ring-red-500" : "",
]);
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>