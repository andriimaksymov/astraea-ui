import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "../Input";

describe("Input component", () => {
  it("should render input component correctly", () => {
    render(<Input placeholder="input" />);
    const progress = screen.getByPlaceholderText("input");

    expect(progress).toBeInTheDocument();
  });

  it("should render Input with custom class", () => {
    const className = "custom-class";
    const { container } = render(<Input className={className} />);
    const inputWrapper = container.firstChild;
    expect(inputWrapper).toHaveClass(className);
  });

  it("should render input disabled when disabled prop is true", () => {
    const { getByRole } = render(<Input disabled />);
    const input = getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("should render input with error styles when hasError prop is true", () => {
    const { container } = render(<Input hasError />);
    const inputWrapper = container.firstChild;
    expect(inputWrapper).toHaveClass(/hasError/);
  });

  it("should render input with startAdornment correctly", () => {
    const startAdornment = <span>Start</span>;
    const { getByText } = render(<Input startAdornment={startAdornment} />);
    const startAdornmentElement = getByText("Start");
    expect(startAdornmentElement).toBeInTheDocument();
  });

  it("should render input with endAdornment correctly", () => {
    const endAdornment = <span>End</span>;
    const { getByText } = render(<Input endAdornment={endAdornment} />);
    const endAdornmentElement = getByText("End");
    expect(endAdornmentElement).toBeInTheDocument();
  });

  it("should render input with onChange handle event correctly", () => {
    const handleChange = vi.fn(); // Mock onChange function
    const { getByRole } = render(<Input onChange={handleChange} />);
    const input = getByRole("textbox");
    const inputValue = "Test Input";

    // Simulate user typing into the input
    fireEvent.change(input, { target: { value: inputValue } });

    // Expect the onChange handler to be called with the correct value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: inputValue }),
      }),
    );
  });

  it("should render input with value correctly", () => {
    const value = "Initial Value";
    const { getByRole } = render(<Input value={value} />);
    const input = getByRole("textbox");

    // Expect the input to have the initial value
    expect(input).toHaveValue(value);
  });
});
