import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import PlusIcon from "../../../assets/icons/PlusIcon";

import IconButton from "../IconButton";

describe("IconButton component", () => {
  it("should render iconButton component correctly", () => {
    render(<IconButton icon={PlusIcon} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render IconButton clickable", () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <IconButton icon={PlusIcon} onClick={handleClick} />,
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("should render IconButton disabled when disabled prop is true", () => {
    render(<IconButton icon={PlusIcon} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
