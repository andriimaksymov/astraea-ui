import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Divider from "../Divider";

describe("Divider component", () => {
  it("should render divider component correctly", () => {
    render(<Divider data-testid="astraea-divider" />);
    expect(screen.getByTestId("astraea-divider")).toBeInTheDocument();
  });

  it("should render divider correctly without children", () => {
    render(<Divider data-testid="astraea-divider" />);
    expect(screen.getByTestId("astraea-divider")).toBeInTheDocument();
  });

  it("should render divider correctly with children", () => {
    render(<Divider data-testid="astraea-divider">Test Divider</Divider>);
    const divider = screen.getByTestId("astraea-divider");
    expect(divider).toBeInTheDocument();
    expect(divider.textContent).toBe("Test Divider");
  });

  it("should render divider with specified orientation", () => {
    render(<Divider data-testid="astraea-divider" orientation="vertical" />);
    expect(screen.getByTestId("astraea-divider")).toHaveClass(/vertical/);
  });
});
