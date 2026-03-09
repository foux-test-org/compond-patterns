import { useTabsContext } from "./TabsRoot.tsx";
import styles from "./Tabs.module.css";

export function TabsPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const { activeTab } = useTabsContext();
  if (activeTab !== id) return null;
  return (
    <div role="tabpanel" className={styles.panel}>
      {children}
    </div>
  );
}
