import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import CircularProgress from "../CircularProgress";

describe("CircularProgress component", () => {
  it("should render circular progress component correctly", () => {
    render(<CircularProgress />);
    const progress = screen.getByTestId("CircularProgress");

    expect(progress).toBeInTheDocument();
  });

  it("should render circular progress component with custom size value", () => {
    render(<CircularProgress size={80} />);
    const progress = screen.getByTestId("CircularProgress");

    expect(progress).toBeInTheDocument();
    expect(progress.style.width).toBe("80px");
    expect(progress.style.height).toBe("80px");
  });

  it("should render circular progress with custom class", () => {
    render(<CircularProgress className="custom-class" />);
    const progress = screen.getByTestId("CircularProgress");

    expect(progress).toBeInTheDocument();
    expect(progress.className).toContain("custom-class");
  });
});
