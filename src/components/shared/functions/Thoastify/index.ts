import { toast, ToastOptions } from "react-toastify";

const initConfigToast: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function toastifySuccess(text: string) {
  toast.success(text, initConfigToast);
}

export function toastifyWarning(text: string) {
  toast.warning(text, initConfigToast);
}

export function toastifyFailed(text: string) {
  toast.error(text, initConfigToast);
}
