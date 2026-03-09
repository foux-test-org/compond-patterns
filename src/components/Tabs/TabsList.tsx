import type { ReactNode } from "react";
import styles from "./Tabs.module.css";

export function TabsList({ children }: { children: ReactNode }) {
  return (
    <div className={styles.list} role="tablist">
      {children}
    </div>
  );
}
