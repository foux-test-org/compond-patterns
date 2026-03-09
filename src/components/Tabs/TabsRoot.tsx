import { createContext, useContext, useState, type ReactNode } from "react";
import styles from "./Tabs.module.css";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs compound components must be used within Tabs.Root");
  return ctx;
}

export function TabsRoot({
  defaultTab,
  children,
}: {
  defaultTab: string;
  children: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={styles.root}>{children}</div>
    </TabsContext.Provider>
  );
}
