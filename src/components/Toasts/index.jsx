import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/global.scss";

export const ToastSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 1 * 1000,
        theme: "light",
    });
};

export const ToastError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 1 * 1000,
        theme: "light",
    });
};