import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Badge from "../Badge";

describe("Badge component", () => {
  it("should render children and badgeContent correctly", () => {
    const { getByText } = render(
      <Badge badgeContent={5}>
        <div>Child Component</div>
      </Badge>,
    );

    expect(getByText("Child Component")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("should have custom className", () => {
    const { container } = render(
      <Badge badgeContent={5} className="custom-class">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should be invisible", () => {
    const { container } = render(
      <Badge badgeContent={5} invisible>
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild).toHaveClass(/invisible/);
  });

  it("should have primary color", () => {
    const { container } = render(
      <Badge badgeContent={5} color="primary">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild.childNodes[1]).toHaveClass(/primaryColor/);
  });

  it("should have primary color", () => {
    const { container } = render(
      <Badge badgeContent={5} color="primary">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild.childNodes[1]).toHaveClass(/primaryColor/);
  });
});
