import { forwardRef, memo } from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// memo(forwardRef(Component)) — fiber unwrapping needs to handle both layers
export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, className, ...props },
    ref
  ) {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          className={`${styles.input} ${error ? styles.error : ""} ${className ?? ""}`}
          {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  })
);
