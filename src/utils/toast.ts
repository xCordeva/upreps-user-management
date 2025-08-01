import { toast } from "sonner";

export const showSuccess = (message: string) =>
  toast.success(message, { ...TOAST_CONFIG.success });

export const showError = (message: string) =>
  toast.error(message, { ...TOAST_CONFIG.error });

export const TOAST_CONFIG = {
  success: {
    duration: 2000,
    style: { background: "var(--success)", color: "#fff" },
  },
  error: {
    duration: 4000,
    style: { background: "var(--error)", color: "#fff" },
  },
};
