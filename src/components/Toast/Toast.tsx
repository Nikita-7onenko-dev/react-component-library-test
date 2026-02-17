import { useEffect } from "react";
import { motion } from "framer-motion";
import type { ToastType } from "../../context/ToastContext";
import { useToast } from "../../context/ToastContext";

type Props = {
  toast: ToastType;
};

export function Toast({ toast}: Props) {
  const { deleteToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      deleteToast(toast.id);
    }, toast.duration ?? 5000);

    return () => clearTimeout(timer);
  }, [toast.id, deleteToast, toast.duration]);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.95, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "#131212",
        color: "white",
        padding: "12px 16px",
        borderRadius: 8,
        minWidth: 250,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {toast.message}
      <button
        style={{ marginLeft: 10 }}
        onClick={() => deleteToast(toast.id)}
      >
        ✕
      </button>
    </motion.li>
  );
}
