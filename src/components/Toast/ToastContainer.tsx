import { createPortal } from "react-dom";
import { useToast } from "../../context/ToastContext";
import { AnimatePresence } from "framer-motion";
import { Toast } from "./Toast";

export function ToastContainer() {
  const { visible } = useToast();

  const container = document.getElementById("overlay");
  if (!container) return null;

  return createPortal(
    <ul style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }}>
      <AnimatePresence>
        {visible.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </ul>,
    container
  );
}
