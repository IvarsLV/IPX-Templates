import { reactive } from "vue";

const toasts = reactive([]);

export function useToast() {
  const addToast = (message, type = "info", duration = 5000) => {
    const id = Date.now().toString();
    toasts.push({ id, message, type, duration });

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    const index = toasts.findIndex((toast) => toast.id === id);
    if (index !== -1) toasts.splice(index, 1);
  };

  return { toasts, addToast, removeToast };
}