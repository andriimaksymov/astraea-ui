import { useState } from "react";

import Tabs from "../Tabs";

export default {
  title: "Tabs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tabs make it easy to explore and switch between different views.",
      },
    },
  },
  component: Tabs,
};

export const BasicTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Tabs
      selectedTab={activeTab}
      tabs={[
        { index: 0, label: "Tab 1" },
        { index: 1, label: "Tab 2" },
        { index: 2, label: "Tab 3" },
      ]}
      onChange={setActiveTab}
    />
  );
};

export const OutlinedTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Tabs
      variant="outlined"
      selectedTab={activeTab}
      tabs={[
        { index: 0, label: "Outlined Tab 1" },
        { index: 1, label: "Outlined Tab 2" },
        { index: 2, label: "Outlined Tab 3" },
      ]}
      onChange={setActiveTab}
    />
  );
};
