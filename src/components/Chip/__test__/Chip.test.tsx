import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Chip from "../Chip";

describe("Chip component", () => {
  it("should render chip component correctly", () => {
    render(<Chip>Default chip</Chip>);
    const checkbox = screen.getByText("Default chip");

    expect(checkbox).toBeInTheDocument();
  });

  it("should calls onDelete when delete icon is clicked", () => {
    const handleDelete = vi.fn();
    render(
      <Chip onDelete={handleDelete} data-testid="chip">
        Test Chip
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    const deleteIcon = chip.querySelector("svg");

    fireEvent.click(deleteIcon);

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("should adds clickable class if onClick is provided", () => {
    const handleClick = vi.fn();
    render(
      <Chip onClick={handleClick} data-testid="chip">
        Test Chip
      </Chip>,
    );
    const chip = screen.getByTestId("chip");

    expect(chip).toHaveClass(/clickable/);
  });

  it("does not call onDelete when chip is clicked", () => {
    const handleDelete = vi.fn();
    const handleClick = vi.fn();
    render(
      <Chip onClick={handleClick} onDelete={handleDelete} data-testid="chip">
        Test Chip
      </Chip>,
    );
    const chip = screen.getByTestId("chip");

    fireEvent.click(chip);

    expect(handleDelete).not.toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
