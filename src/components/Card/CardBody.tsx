import type { ReactNode } from "react";
import styles from "./Card.module.css";

export function CardBody({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>;
}
