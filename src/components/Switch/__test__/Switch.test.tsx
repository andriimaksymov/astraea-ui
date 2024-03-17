import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

import Switch from "../Switch";

describe("Switch component", () => {
  it("should render switch with label", () => {
    render(<Switch label="Toggle" />);

    expect(screen.getByText("Toggle")).toBeInTheDocument();
  });

  it("should toggle switch when clicked", () => {
    const handleChange = vi.fn();
    render(<Switch label="Toggle" onChange={handleChange} />);

    const switchInput = screen.getByRole("checkbox");

    fireEvent.click(switchInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Ensure onChange is called with an event object
    expect(switchInput).toBeChecked();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Switch label="Toggle" disabled />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("should call onChange callback when switch state changes", () => {
    const handleChange = vi.fn();
    render(<Switch label="Toggle" onChange={handleChange} />);

    const switchInput = screen.getByRole("checkbox");

    fireEvent.click(switchInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Ensure onChange is called with an event object
  });
});
