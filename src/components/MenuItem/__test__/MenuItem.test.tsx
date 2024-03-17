import { describe, expect, it, vi } from "vitest";
import { screen, fireEvent, render } from "@testing-library/react";

import MenuItem from "../MenuItem";

describe("MenuItem component", () => {
  it("should render MenuItem component correctly", () => {
    render(<MenuItem>Menu Item</MenuItem>);
    expect(screen.getByText("Menu Item")).toBeInTheDocument();
  });

  it("should applied the provided class", () => {
    render(
      <MenuItem data-testid="menu-item" className="custom-class">
        Menu Item
      </MenuItem>,
    );
    expect(screen.getByTestId("menu-item")).toBeInTheDocument();
  });

  it("should applied active styles when isActive prop is true", () => {
    render(<MenuItem isActive>Active Menu Item</MenuItem>);
    expect(screen.queryByText("Active Menu Item")).toBeInTheDocument();
  });

  it("should applied cursor pointer styles when onClick prop is provided", () => {
    const handleClick = vi.fn();

    render(
      <MenuItem data-testid="menu-item" onClick={handleClick}>
        Clickable Menu Item
      </MenuItem>,
    );

    expect(screen.getByTestId("menu-item")).toBeInTheDocument();
  });

  it("should call onClick handler when clicked", () => {
    const handleClick = vi.fn();

    render(<MenuItem onClick={handleClick}>Clickable Menu Item</MenuItem>);

    const menuItem = screen.getByText("Clickable Menu Item");
    fireEvent.click(menuItem);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
