import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Card from "../Card";

describe("Card component", () => {
  it("Card should render correctly", () => {
    const { getByText } = render(
      <Card>
        <span>Hello, World!</span>
      </Card>,
    );
    expect(getByText("Hello, World!")).toBeInTheDocument();
  });

  it("Applies custom className", () => {
    const { container } = render(<Card className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("Applies elevation prop", () => {
    const { container } = render(<Card elevation={1} />);
    expect(container.firstChild).toHaveClass(/elevation1/);
  });

  it("Applies padding prop", () => {
    const { container } = render(<Card padding="small" />);
    expect(container.firstChild).toHaveClass(/paddingSmall/);
  });
});
