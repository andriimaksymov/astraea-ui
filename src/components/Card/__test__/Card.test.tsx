import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "../Card";

describe("Card component", () => {
  it("should render card correctly", () => {
    render(<Card>Hello, World!</Card>);
    const card: HTMLDivElement = screen.getByText("Hello, World!");

    expect(card).toBeDefined();
  });

  it("should render card with custom className", () => {
    render(<Card className="custom-class">Hello, World!</Card>);
    const card = screen.getByText("Hello, World!");

    expect(card.className).toContain("custom-class");
  });

  it("should render card with elevation level 1", () => {
    render(<Card elevation={1}>Hello, World!</Card>);
    const card = screen.getByText("Hello, World!");

    expect(card.className).toContain("elevation1");
  });

  it("should render card with small padding", () => {
    render(<Card padding="small">Hello, World!</Card>);
    const card = screen.getByText("Hello, World!");

    expect(card.className).toContain("paddingSmall");
  });
});
