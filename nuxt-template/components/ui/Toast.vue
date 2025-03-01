<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: "info",
    validator: (value) => ["success", "error", "warning", "info"].includes(value),
  },
  duration: { type: Number, default: 5000 },
  id: String,
});

const emit = defineEmits(["remove"]);

const visible = ref(false);
const fadingOut = ref(false);

onMounted(() => {
  visible.value = true;

  // Запускаем плавное исчезновение за 2 секунды перед удалением
  setTimeout(() => {
    fadingOut.value = true;
    setTimeout(() => {
      closeToast();
    }, 2000); // Анимация исчезновения за 2 секунды
  }, props.duration - 2000);
});

const closeToast = () => {
  fadingOut.value = true;
  setTimeout(() => {
    emit("remove", props.id);
  }, 2000);
};
</script>

<template>
  <div
    v-if="visible"
    class="fixed top-5 right-5 z-50 flex items-center gap-3 p-4 rounded-lg shadow-md transition-opacity duration-2000 transform
      bg-opacity-90 text-white"
    :class="{
      'bg-green-500': type === 'success',
      'bg-red-500': type === 'error',
      'bg-yellow-500': type === 'warning',
      'bg-blue-500': type === 'info',
      'opacity-100 translate-y-0': !fadingOut,
      'opacity-0': fadingOut,
    }"
  >
    <span class="font-medium">{{ message }}</span>
    <button @click="closeToast" class="ml-4 text-lg font-bold opacity-80 hover:opacity-100">×</button>
  </div>
</template>