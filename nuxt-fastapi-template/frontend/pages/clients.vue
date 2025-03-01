<script setup>
const config = useRuntimeConfig();

const { data: clients, pending, error } = useFetch(
  `${config.public.apiBase}/clients`)  // получится http://127.0.0.1:8000/api/clients
const name = ref("");
const email = ref("");
const adding = ref(false);

async function addClient() {
  adding.value = true;
  const { error } = await useFetch(`${config.public.apiBase}/clients`, {
    method: "POST",
    body: { name: name.value, email: email.value },
  });
  adding.value = false;
  if (!error.value) {
    name.value = "";
    email.value = "";
    refresh(); // Перезапрашиваем список клиентов
  }
}
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Список клиентов</h1>

    <!-- Форма добавления клиента -->
    <div class="mb-6 p-4 border rounded bg-gray-100">
      <h2 class="text-lg font-semibold mb-2">Добавить клиента</h2>
      <input v-model="name" placeholder="Имя" class="border p-2 w-full mb-2 rounded" />
      <input v-model="email" placeholder="Email" class="border p-2 w-full mb-2 rounded" />
      <button @click="addClient" :disabled="adding" class="bg-blue-500 text-white p-2 rounded">
        Добавить
      </button>
    </div>

    <!-- Вывод списка клиентов -->
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error" class="text-red-500">Ошибка: {{ error.message }}</div>

    <ul v-else class="space-y-4">
      <li v-for="client in clients" :key="client.id" class="p-4 border rounded shadow">
        <h2 class="text-lg font-semibold">{{ client.name }}</h2>
        <p class="text-gray-600">{{ client.email }}</p>
      </li>
    </ul>
  </div>
</template>