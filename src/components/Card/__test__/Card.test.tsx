import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Card from "../Card";

describe("Card component", () => {
  it("should render card correctly", () => {
    const { getByText } = render(<Card>Hello, World!</Card>);

    expect(getByText("Hello, World!")).toBeDefined();
  });

  it("should render card with custom className", () => {
    const { container } = render(<Card className="custom-class" />);
    expect(container.firstElementChild.classList).include(/custom-class/);
  });

  it("should render card with elevation level 1", () => {
    const { container } = render(<Card elevation={1} />);
    expect(container.firstElementChild.classList).include(/elevation1/);
  });

  it("should render card with small padding", () => {
    const { container } = render(<Card padding="small" />);
    expect(container.firstElementChild.classList).include(/paddingSmall/);
  });
});
