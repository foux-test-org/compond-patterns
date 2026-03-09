import type { ComponentType } from "react";
import styles from "./withLayout.module.css";

// Another HOC layer — withLayout(withAuth(Dashboard)) means the fiber walk
// has to unwrap through two HOC wrappers to reach the actual Dashboard component.
export function withLayout<P extends object>(WrappedComponent: ComponentType<P>) {
  function WithLayout(props: P) {
    return (
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarTitle}>Navigation</div>
          <ul className={styles.sidebarNav}>
            <li>Overview</li>
            <li>Analytics</li>
            <li>Reports</li>
          </ul>
        </aside>
        <div className={styles.content}>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  }

  WithLayout.displayName = `withLayout(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithLayout;
}
