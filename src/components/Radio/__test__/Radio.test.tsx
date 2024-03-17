import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

import Radio from "../Radio";

describe("Radio component", () => {
  it("should render radio component correctly with label", () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("should update radio input with onChange event handler", () => {
    const handleChange = vi.fn();
    render(<Radio label="Option" onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText("Option")); // Simulate a click event
    expect(handleChange).toHaveBeenCalled();
  });
});
