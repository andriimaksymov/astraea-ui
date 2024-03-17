import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

import Tabs from "../Tabs";

describe("Tabs component", () => {
  const tabs = [
    { label: "Tab 1", index: 0, content: "Content for tab 1" },
    { label: "Tab 2", index: 1, content: "Content for tab 2" },
    { label: "Tab 3", index: 2, content: "Content for tab 3" },
  ];

  it("should render tabs with correct labels", () => {
    render(<Tabs tabs={tabs} selectedTab={0} onChange={() => {}} />);

    tabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it("should change selected tab on click", () => {
    const handleChange = vi.fn();
    render(<Tabs tabs={tabs} selectedTab={0} onChange={handleChange} />);

    const tab2 = screen.getByText("Tab 2");

    fireEvent.click(tab2);

    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it("should display content of selected tab", () => {
    render(<Tabs tabs={tabs} selectedTab={1} onChange={() => {}} />);
    expect(screen.getByText("Content for tab 2")).toBeInTheDocument();
  });

  it("should applies correct style for tabs", () => {
    render(
      <Tabs
        tabs={tabs}
        selectedTab={0}
        onChange={() => {}}
        variant="outlined"
        orientation="vertical"
      />,
    );

    const tabList = screen.getByRole("tablist");

    expect(tabList.parentElement).toHaveClass(/vertical/);
    expect(tabList.parentElement).toHaveClass(/outlined/);
  });
});
