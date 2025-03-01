<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  type: { type: String, default: "text" },
  icon: String,
  placeholder: String,
  error: String,
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue || "");

// Определяем, активно ли поле (фокус или уже введён текст)
const isActive = computed(() => inputValue.value.length > 0);
</script>

<template>
  <div class="relative w-full">
    <!-- Иконка (если передана) -->
    <div v-if="icon" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      <i :class="icon"></i>
    </div>

    <!-- Поле ввода -->
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="peer w-full p-3 border rounded-lg outline-none transition-all duration-200
        bg-white text-gray-800 shadow-sm hover:shadow-md focus:shadow-lg focus:ring-2 focus:ring-accent
        placeholder-transparent"
      :class="{ 'pl-10': icon, 'border-red-500 focus:ring-red-500': error }"
      @input="emit('update:modelValue', inputValue)"
    />

    <!-- Анимированная метка (исправлена анимация) -->
    <label
      class="absolute left-3 text-gray-500 text-base transition-all duration-200 px-1
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent"
      :class="{ 'top-1 text-xs text-accent': isActive, 'top-3 text-base text-gray-400': !isActive }"
    >
      {{ label }}
    </label>

    <!-- Ошибка -->
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>