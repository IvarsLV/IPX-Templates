<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: Boolean,
  title: String,
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
});

const emit = defineEmits(["update:modelValue"]);

const modalVisible = ref(false);
const overlayVisible = ref(false);

// Проверяем, есть ли `document` (чтобы избежать ошибки SSR)
const isClient = typeof window !== "undefined";

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      modalVisible.value = true;
      setTimeout(() => {
        overlayVisible.value = true;
      }, 10);

      // Отключаем скролл, но только если есть `document`
      if (isClient) document.body.classList.add("overflow-hidden");
    } else {
      overlayVisible.value = false;
      setTimeout(() => {
        modalVisible.value = false;
      }, 300);

      if (isClient) document.body.classList.remove("overflow-hidden");
    }
  },
  { immediate: true }
);

// Закрытие при клике по фону или `Esc`
const closeModal = () => {
  emit("update:modelValue", false);
};

const handleEscape = (event) => {
  if (event.key === "Escape") closeModal();
};

onMounted(() => {
  if (isClient) window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  if (isClient) window.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="modalVisible"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-[1000]" 
        :class="{ 'opacity-100': overlayVisible, 'opacity-0': !overlayVisible }"
        @click.self="closeModal"
      >
        <transition name="scale">
          <div
            v-if="overlayVisible"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 relative z-[1010]"
            :class="{
              'w-11/12 max-w-sm': size === 'sm',
              'w-10/12 max-w-md': size === 'md',
              'w-8/12 max-w-lg': size === 'lg',
            }"
          >
            <!-- Заголовок -->
            <div class="flex justify-between items-center p-4 border-b">
              <h3 class="text-lg font-semibold">{{ title }}</h3>
              <button @click="closeModal" class="text-xl font-bold opacity-70 hover:opacity-100">×</button>
            </div>

            <!-- Контент -->
            <div class="p-4">
              <slot />
            </div>

            <!-- Кнопки -->
            <div class="p-4 border-t flex justify-end gap-3">
              <slot name="buttons" />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style>
/* Фон затемнения */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Анимация увеличения */
.scale-enter-active, .scale-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.scale-enter-from, .scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>