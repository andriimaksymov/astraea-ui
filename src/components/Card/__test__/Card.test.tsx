import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "../Card";

describe("Card component", () => {
  it("should render the card with default props", () => {
    render(<Card>Hello, World!</Card>);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("should render the card with custom class", () => {
    render(<Card className="custom-class">Hello, World!</Card>);
    expect(screen.getByText("Hello, World!")).toHaveClass("custom-class");
  });

  it("should render the card with specified level", () => {
    render(<Card elevation={2}>Hello, World!</Card>);
    expect(screen.getByText("Hello, World!")).toHaveClass(/elevation2/);
  });

  it("should render the card with specified padding", () => {
    render(<Card padding="small">Hello, World!</Card>);
    expect(screen.getByText("Hello, World!")).toHaveClass(/paddingSmall/);
  });
});
