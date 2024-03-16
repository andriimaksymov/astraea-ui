import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Checkbox from "../Checkbox";

describe("Checkbox component", () => {
  it("should render the checkbox with default props", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("should renders the checkbox with label and checked by default", () => {
    render(<Checkbox label="Checkbox Label" defaultChecked />);
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Checkbox Label");

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it("should toggles checkbox state when clicked", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked(true);

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked(true);
  });

  it("should executes onChange handler when clicked", async () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    // Simulate a click event on the checkbox
    fireEvent.click(checkbox);

    // Assert that the onChange handler was called
    expect(handleChange).toHaveBeenCalled();
  });
});
