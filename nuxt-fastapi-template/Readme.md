# Nuxt + FastAPI Template

**A full-stack template featuring a Nuxt 3 frontend and a FastAPI (Python) backend.**
This project demonstrates a *simplified* structure without multiple folders for `models/`, `schemas/`, `crud/`, and `routers/`. Instead, everything is kept minimal:

- **`main.py`** (FastAPI entry point)
- **`database.py`** (DB connection)
- **`models.py`** (SQLAlchemy models)
- **`routes.py`** (all endpoints)

On the frontend side, we still have Nuxt 3 with pages and custom UI components.

---
## Table of Contents
1. [Overview](#overview)
2. [Frontend (Nuxt 3)](#frontend-nuxt-3)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Project Structure](#project-structure-frontend)
   - [UI Components](#ui-components)
   - [Running the Frontend](#running-the-frontend)
3. [Backend (FastAPI)](#backend-fastapi)
   - [Prerequisites](#prerequisites-1)
   - [Installation](#installation-1)
   - [Project Structure](#project-structure-backend)
   - [How It Works](#how-it-works)
   - [Running the Backend](#running-the-backend)
4. [Integration (Nuxt + FastAPI)](#integration-nuxt--fastapi)
   - [CORS Settings](#cors-settings)
   - [API Routes](#api-routes)
5. [Usage](#usage)
   - [Testing the API](#testing-the-api)
   - [Working with the Frontend](#working-with-the-frontend)
6. [UI Components Detail](#ui-components-detail)
   - [Button](#button)
   - [Card](#card)
   - [Input](#input)
   - [Toast (Notifications)](#toast-notifications)
   - [Modal (Dialog)](#modal-dialog)
7. [License](#license)

---
## Overview

This template combines:

- **Nuxt 3** (Vue 3 + Vite) for the **frontend**
  - Offers server-side rendering (SSR), static-site generation (SSG), or SPA
  - Includes custom UI components: buttons, cards, inputs, modals, and toasts
- **FastAPI** (Python 3.7+ or 3.13+) for the **backend**
  - A microservice that manages **Clients** data (create, read, delete)
  - Uses **SQLAlchemy** with **SQLite** (or easily switch to PostgreSQL)
  - Built with a microservice architecture approach

You can clone this project, install the dependencies, and run a complete full-stack app.

---
## Frontend (Nuxt 3)

### Prerequisites
- **Node.js** (version 16+ recommended)
- **Yarn** or **npm** (in this template, we use Yarn)

### Installation
1. **Clone the repository** (if not already):
   ```bash
   git clone https://github.com/your-username/nuxt-fastapi-template.git
   ```
2. **Navigate to the frontend folder**:
   ```bash
   cd nuxt-fastapi-template/frontend
   ```
3. **Install dependencies**:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

### Project Structure (Frontend)
```bash
frontend/
├─ pages/
│  ├─ index.vue            # Home page
│  ├─ clients.vue          # Displays clients list & form to add new client
├─ components/
│  ├─ ui/
│  │  ├─ Button.vue        # Custom button
│  │  ├─ Card.vue          # Card container
│  │  ├─ Input.vue         # Animated input
│  │  ├─ Toast.vue         # Single toast message
│  │  ├─ ToastContainer.vue# Container for all toasts
│  │  ├─ Modal.vue         # Reusable modal
├─ composables/
│  ├─ useToast.js          # Logic for toast notifications
├─ public/                 # Static assets
├─ assets/                 # Global styles, images
├─ nuxt.config.ts          # Nuxt configuration
├─ package.json
├─ yarn.lock
```
- **`pages/clients.vue`**: Demonstrates a **Clients** list (fetched from FastAPI) + a **form** to add new clients
- **`components/ui/*.vue`**: UI components (buttons, modals, inputs, etc.)

### UI Components
1. **Button.vue**
   - Accepts `variant` (primary, secondary, danger) and `size` (sm, md, lg)
2. **Card.vue**
   - Basic container with border, padding, hover effect
3. **Input.vue**
   - Animated placeholder that becomes a floating label
4. **Toast.vue** & **ToastContainer.vue**
   - Notifications (success, error, info, etc.)
5. **Modal.vue**
   - Dialog with a backdrop, multiple sizes, and close logic

### Running the Frontend
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
## Backend (FastAPI)

### Prerequisites
- **Python 3.7+** (3.13 recommended)
- **Virtual environment** recommended

### Installation
1. **Navigate to backend**:
   ```bash
   cd nuxt-fastapi-template/backend
   ```
2. **Create and activate a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # macOS/Linux
   # or on Windows:
   venv\Scripts\activate
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   If the file is empty, install manually:
   ```bash
   pip install fastapi uvicorn sqlalchemy pydantic[email] python-multipart
   pip freeze > requirements.txt
   ```

### Project Structure (Backend)
```bash
backend/
├─ main.py                # Main FastAPI file
├─ database.py            # DB connection (SQLAlchemy)
├─ models.py              # SQLAlchemy model(s)
├─ routes.py              # All endpoints for Clients
├─ venv/                  # Virtual environment
├─ requirements.txt
```
- **`main.py`**: Creates FastAPI app, configures CORS, includes routes
- **`routes.py`**: Defines endpoints (`GET, POST, DELETE` for clients)
- **`models.py`**: SQLAlchemy model(s) for `Client`
- **`database.py`**: Database setup (engine, session)

### How It Works
1. **Database**: Uses SQLite by default (`database.py`).
2. **Model**: `Client` with `id`, `name`, `email`.
3. **Routes**: `/clients` endpoint for GET, POST, DELETE, etc.
4. **main.py**: Connects everything, runs FastAPI.

### Running the Backend
1. **Activate virtual environment** (if not already):
   ```bash
   source venv/bin/activate
   ```
2. **Run FastAPI**:
   ```bash
   uvicorn main:app --reload
   ```
3. **Open** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for Swagger UI.

---
## Integration (Nuxt + FastAPI)

### CORS Settings
In `main.py`, something like:
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
This allows **Nuxt** (on `localhost:3000`) to access **FastAPI** (on `localhost:8000`).

### API Routes
- **FastAPI**: e.g. `http://127.0.0.1:8000/clients`
- **Nuxt**:
  ```js
  const config = useRuntimeConfig();
  useFetch(`${config.public.apiBase}/clients`);
  ```
  If `apiBase` is `http://127.0.0.1:8000`, then it becomes `http://127.0.0.1:8000/clients`.

---
## Usage

### Testing the API
1. **Start FastAPI**:
   ```bash
   cd backend
   source venv/bin/activate
   uvicorn main:app --reload
   ```
   Open [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

2. **Start Nuxt**:
   ```bash
   cd ../frontend
   yarn dev
   ```
   Open [http://localhost:3000/clients](http://localhost:3000/clients).

### Working with the Frontend
- **List of Clients**: fetched from `GET /clients`.
- **Add Client**: form sends `POST /clients` with `{ name, email }`.

---
## UI Components Detail

### Button
**`components/ui/Button.vue`**
```vue
<template>
  <button :class="classes"><slot /></button>
</template>
```
- **Props**: `variant` (`primary`, `secondary`, `danger`), `size` (`sm`, `md`, `lg`).

### Card
**`components/ui/Card.vue`**
```vue
<template>
  <div class="border rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition">
    <slot />
  </div>
</template>
```
- A simple container for any content.

### Input
**`components/ui/Input.vue`**
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
- **`Toast.vue`**: Single toast message with fade-out.
- **`ToastContainer.vue`**: Renders a list of toasts.
- **`useToast.js`**: Composable to show/hide notifications.

### Modal (Dialog)
**`components/ui/Modal.vue`**
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
- Props: `modelValue`, `title`, `size` (`sm`, `md`, `lg`).
- Closes on `Esc` or backdrop click.

---
## License

**MIT License**. Feel free to fork, customize, and share.

Enjoy building with **Nuxt + FastAPI**! If you encounter issues or have suggestions, please open an issue or submit a PR.

