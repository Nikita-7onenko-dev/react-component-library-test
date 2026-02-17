import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { nanoid } from "nanoid";

export type ToastType = {
  id: string;
  message: string;
  type: "success" | "error";
  duration?: number;
};

export type ToastPayload = Omit<ToastType, "id">;

type ToastContextType = {
  showToast: (toast: ToastPayload) => void;
  deleteToast: (id: string) => void;
  visible: ToastType[];
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState<ToastType[]>([]);
  const [queue, setQueue] = useState<ToastType[]>([]);

  const showToast = useCallback((payload: ToastPayload) => {
    const toast = { ...payload, id: nanoid() };

    setVisible((prev) => {
      if (prev.length < 3) {
        return [...prev, toast];
      }

      setQueue((q) => [...q, toast]);
      return prev;
    });
  }, []);

  const deleteToast = useCallback((id: string) => {
  setVisible((prevVisible) => {

    let nextToast: ToastType | null = null;

    setQueue((prevQueue) => {
      if (prevQueue.length > 0) {
        nextToast = prevQueue[0];
        return prevQueue.slice(1);
      }
      return prevQueue;
    });

    const newVisible = prevVisible.filter((t) => t.id !== id);
    return nextToast ? [...newVisible, nextToast] : newVisible;
  });
}, []);


  return (
    <ToastContext.Provider
      value={{ showToast, deleteToast, visible }}
    >
      {children}
    </ToastContext.Provider>
  );
}
