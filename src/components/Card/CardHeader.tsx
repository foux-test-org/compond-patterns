import type { ReactNode } from "react";
import styles from "./Card.module.css";

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className={styles.header}>{children}</div>;
}
