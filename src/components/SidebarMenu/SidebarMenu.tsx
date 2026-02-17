import { motion, AnimatePresence } from "framer-motion";
import { SidebarItem } from "./SidebarItem";
import type { SidebarItemType } from "./SidebarItem";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  items: SidebarItemType[];
};

export function SidebarMenu({ isOpen, onClose, items }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "black",
              zIndex: 1000,
            }}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: 300,
              background: "#111",
              color: "white",
              padding: 20,
              zIndex: 1001,
              overflowY: "auto",
            }}
          >
            {items.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
