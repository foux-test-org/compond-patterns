import { useState, type ComponentType } from "react";
import styles from "./withAuth.module.css";

// Custom HOC — wraps component with auth checking.
// Fiber walk sees withAuth(Dashboard), needs to unwrap to find Dashboard.
export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  function WithAuth(props: P) {
    const [authenticated] = useState(true); // simulated

    if (!authenticated) {
      return (
        <div className={styles.authGate}>
          <p>Please log in to continue</p>
          <button className={styles.loginBtn}>Log In</button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  }

  WithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuth;
}
