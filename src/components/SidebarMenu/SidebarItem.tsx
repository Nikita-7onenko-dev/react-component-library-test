import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  item: SidebarItemType;
  level?: number;
};

export type SidebarItemType = {
  id: string;
  title: string;
  children?: SidebarItemType[];
};

export function SidebarItem({ item, level = 0 }: Props) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div style={{ marginLeft: level * 12 }}>
      <div
        onClick={() => hasChildren && setOpen(!open)}
        style={{
          padding: "8px 0",
          cursor: hasChildren ? "pointer" : "default",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {item.title}
        {hasChildren && <span>{open ? "-" : "+"}</span>}
      </div>

      <AnimatePresence initial={false}>
        {open && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            {item.children!.map((child) => (
              <SidebarItem
                key={child.id}
                item={child}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
