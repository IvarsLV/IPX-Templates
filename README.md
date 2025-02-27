# **IPX Templates**  
A collection of ready-to-use starter templates for modern web development.

## **📌 Available Templates**  
This repository contains multiple project templates:

- **📂 astro-template** – Static site generator with TailwindCSS  
- **📂 nuxt-template** – Nuxt.js (Vue 3) SSR-ready with TailwindCSS  
- **📂 nuxt-fastapi-template** – Full-stack app with Nuxt.js (frontend) & FastAPI (backend)  
- **📂 nuxt-django-template** – Full-stack app with Nuxt.js (frontend) & Django (backend)  

---

## **📌 How to Use**  

### **Option 1: Clone the whole repository**  
To get all templates at once, clone the entire repository:

```sh
git clone https://github.com/your-username/IPX-Templates.git
cd IPX-Templates
```

### **Option 2: Clone only a specific template**  
If you only need one template (e.g., `astro-template`), use `sparse-checkout`:

```sh
git clone --depth 1 --filter=tree:0 https://github.com/your-username/IPX-Templates.git
cd IPX-Templates
git sparse-checkout init --cone
git sparse-checkout set astro-template
cd astro-template
```

---

## **📌 Setup Instructions**  

### **Astro Template**  
```sh
cd astro-template
npm install
npm run dev
npm run build
npm run preview
```

### **Nuxt.js Template**  
```sh
cd nuxt-template
npm install
npm run dev
npm run build
npm run start
```

### **Nuxt + FastAPI Template**  
#### **Frontend Setup:**  
```sh
cd nuxt-fastapi-template/frontend
npm install
npm run dev
```
#### **Backend Setup:**  
```sh
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### **Nuxt + Django Template**  
#### **Frontend Setup:**  
```sh
cd nuxt-django-template/frontend
npm install
npm run dev
```
#### **Backend Setup:**  
```sh
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## **📌 Deployment**  
Each template can be deployed to different hosting platforms:

| **Template**          | **Recommended Deployment** |
|----------------------|---------------------------|
| **Astro**           | Netlify, Vercel, GitHub Pages |
| **Nuxt.js**         | Vercel, Netlify, DigitalOcean |
| **Nuxt + FastAPI**  | Frontend: Vercel / Backend: Render, DigitalOcean |
| **Nuxt + Django**   | Frontend: Vercel / Backend: Render, Heroku |

To deploy, push your project to GitHub and connect it to your hosting provider.

---

## **📌 Contributing**  
1. **Fork** the repository  
2. **Create a new branch** (`feature-name`)  
3. **Make changes** and commit  
4. **Push to GitHub**  
5. **Create a Pull Request**  

---

## **📌 License**  
This project is licensed under the **MIT License**.

---

🔥 **Now you have an organized way to start new projects quickly!** 🚀

