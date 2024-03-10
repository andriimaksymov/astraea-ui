import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Badge from "../Badge";

describe("Badge component", () => {
  it("Renders children and badgeContent correctly", () => {
    const { getByText } = render(
      <Badge badgeContent={5}>
        <div>Child Component</div>
      </Badge>,
    );

    expect(getByText("Child Component")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("Applies custom className correctly", () => {
    const { container } = render(
      <Badge badgeContent={5} className="custom-class">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("Applies invisible styles correctly", () => {
    const { container } = render(
      <Badge badgeContent={5} invisible>
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild).toHaveClass(/invisible/);
  });
});
