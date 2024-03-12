import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Checkbox from "../Checkbox";

describe("Checkbox component", () => {
  it("should render checkbox component correctly", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDefined();
  });

  it("should have checked value true if defaultChecked value is true", () => {
    render(<Checkbox defaultChecked={true} />);
    const checkbox: HTMLInputElement = screen.getByRole("checkbox");

    expect(checkbox.checked).toBe(true);
  });

  it("should change checked value on click checkbox", () => {
    render(<Checkbox />);
    const checkbox: HTMLInputElement = screen.getByRole("checkbox");

    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
