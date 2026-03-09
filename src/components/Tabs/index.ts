import { TabsRoot } from "./TabsRoot.tsx";
import { TabsList } from "./TabsList.tsx";
import { Tab } from "./Tab.tsx";
import { TabsPanel } from "./TabsPanel.tsx";

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Tab: Tab,
  Panel: TabsPanel,
});
