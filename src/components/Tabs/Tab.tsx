import { useTabsContext } from "./TabsRoot.tsx";
import styles from "./Tabs.module.css";

export function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const { activeTab, setActiveTab } = useTabsContext();
  return (
    <button
      role="tab"
      aria-selected={activeTab === id}
      className={`${styles.tab} ${activeTab === id ? styles.active : ""}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}
