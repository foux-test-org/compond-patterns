import type { ReactNode } from "react";
import styles from "./Card.module.css";

export function CardFooter({ children }: { children: ReactNode }) {
  return <div className={styles.footer}>{children}</div>;
}
