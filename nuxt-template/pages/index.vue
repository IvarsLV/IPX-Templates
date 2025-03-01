<template>
    <div class="text-center">
      <h1 class="text-h1 font-bold">Nuxt  Starter</h1>
      <p class="text-lg text-gray-600 mt-4">Nuxt шаблон для быстрых проектов</p>
    </div>

    <div class="container py-16 space-y-12">
    <h1 class="text-xl font-bold text-center">UI Компоненты</h1>

    <!-- Кнопки -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Кнопки</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Стандарт</Button>
        <Button variant="secondary">Второстепенная</Button>
        <Button variant="danger" size="lg">Удалить</Button>
      </div>
    </section>

    <!-- Карточки -->
    <section>
  <h2 class="text-2xl font-semibold mb-4">Карточки</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card>
      <h3 class="text-xl font-semibold">Первая карточка</h3>
      <p class="text-gray-600 mt-2">Свободное наполнение</p>
      <Button class="mt-4">Подробнее</Button>
    </Card>

    <Card>
      <img src="https://via.placeholder.com/300x150" alt="Пример" class="rounded-lg mb-4" />
      <p class="text-gray-600">Карточка с изображением</p>
    </Card>

    <Card>
      <h3 class="text-xl font-semibold">Полностью кастомный контент</h3>
      <ul class="list-disc pl-5 text-gray-600 mt-2">
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
      </ul>
    </Card>
  </div>
</section>

    <!-- Инпуты -->
    <section>
    <h2 class="text-2xl font-semibold mb-4">Инпуты</h2>
    <div class="flex flex-col gap-6 max-w-md">
      <Input v-model="name" label="Имя" placeholder="Введите имя" icon="fas fa-user" />
      <Input v-model="email" type="email" label="Email" placeholder="Введите email" icon="fas fa-envelope" />
      <Input v-model="password" type="password" label="Пароль" placeholder="Введите пароль" icon="fas fa-lock" error="Пароль слишком короткий" />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Тосты</h2>
    <div class="flex gap-3">
      <button @click="addToast('Успех! Всё работает.', 'success')" class="px-4 py-2 bg-green-500 text-white rounded-lg">
        Успех
      </button>
      <button @click="addToast('Ошибка! Что-то пошло не так.', 'error')" class="px-4 py-2 bg-red-500 text-white rounded-lg">
        Ошибка
      </button>
      <button @click="addToast('Предупреждение! Проверьте данные.', 'warning')" class="px-4 py-2 bg-yellow-500 text-white rounded-lg">
        Предупреждение
      </button>
      <button @click="addToast('Информация! Просто уведомление.', 'info')" class="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Инфо
      </button>
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Модальные окна</h2>
    <button @click="showModal = true" class="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Открыть модальное окно
    </button>

    <Modal v-model="showModal" title="Заголовок модального окна" size="md">
      <p>Это содержимое модального окна.</p>

      <template #buttons>
        <button @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded-lg">Закрыть</button>
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg">ОК</button>
      </template>
    </Modal>
  </section>

  </div>
  </template>

<script setup>
import { useToast } from "@/composables/useToast";
import { ref } from "vue";
import Modal from "@/components/ui/Modal.vue";

const showModal = ref(false);
const { addToast } = useToast();
</script>