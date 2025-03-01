# Nuxt 3 + UI Components Template

**A standalone Nuxt 3 project** showcasing minimal UI components (Button, Card, Input, Toast, Modal) without a backend.

---
## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Running the Project](#running-the-project)
6. [UI Components Detail](#ui-components-detail)
   - [Button](#button)
   - [Card](#card)
   - [Input](#input)
   - [Toast (Notifications)](#toast-notifications)
   - [Modal (Dialog)](#modal-dialog)
7. [License](#license)

---
## Overview

This template is **purely Nuxt 3** (Vue 3 + Vite), with **no backend**. It demonstrates a minimal project structure and custom UI components:

- **Button**: with variants and sizes
- **Card**: a container with styling and hover effects
- **Input**: floating label, placeholder disappears while typing
- **Toast**: for notifications
- **Modal**: a reusable dialog box with transition

You can use this as a starting point for a simple Nuxt 3 SPA or SSG site.

---
## Prerequisites
- **Node.js** (version 16+ recommended)
- **Yarn** or **npm** (in this template, we use Yarn)

---
## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nuxt-ui-template.git
   ```
2. **Navigate to the project folder**:
   ```bash
   cd nuxt-ui-template
   ```
3. **Install dependencies**:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

---
## Project Structure
```bash
nuxt-ui-template/
├─ pages/
│  ├─ index.vue          # Home page
├─ components/
│  ├─ ui/
│  │  ├─ Button.vue      # Custom button
│  │  ├─ Card.vue        # Card container
│  │  ├─ Input.vue       # Animated input
│  │  ├─ Toast.vue       # Single toast message
│  │  ├─ ToastContainer.vue # Container for all toasts
│  │  ├─ Modal.vue       # Reusable modal
├─ composables/
│  ├─ useToast.js        # Logic for toast notifications
├─ public/               # Static assets
├─ assets/               # Global styles, images
├─ nuxt.config.ts        # Nuxt configuration
├─ package.json
├─ yarn.lock
```

- **`pages/index.vue`**: Example usage of UI components.
- **`components/ui/*.vue`**: Our UI components (Button, Card, Input, Toast, Modal).

---
## Running the Project
1. **Development**:
   ```bash
   yarn dev
   ```
   Then open [http://localhost:3000](http://localhost:3000)

2. **Production build**:
   ```bash
   yarn build
   yarn start
   ```
---
## UI Components Detail

### Button
`components/ui/Button.vue`
```vue
<template>
  <button :class="classes"><slot /></button>
</template>
```
- **Props**: `variant` (`primary`, `secondary`, `danger`), `size` (`sm`, `md`, `lg`).

### Card
`components/ui/Card.vue`
```vue
<template>
  <div class="border rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition">
    <slot />
  </div>
</template>
```
- A simple container for any content.

### Input
`components/ui/Input.vue`
```vue
<template>
  <div class="relative w-full">
    <input v-model="inputValue" .../>
    <label>...</label>
  </div>
</template>
```
- Floating label, placeholder disappears on typing.

### Toast (Notifications)
- **`Toast.vue`**: Single toast message with fade-out
- **`ToastContainer.vue`**: Renders a list of toasts
- **`useToast.js`**: Composable to show/hide notifications

### Modal (Dialog)
`components/ui/Modal.vue`
```vue
<template>
  <Teleport to="body">
    <div v-if="modelValue" ...>
      <div class="dialog">
        <slot />
      </div>
    </div>
  </Teleport>
</template>
```
- Props: `modelValue` (boolean), `title`, `size` (`sm`, `md`, `lg`).
- Closes on `Esc` or backdrop click.

---
## License

**MIT License**. Feel free to fork, customize, and share.
