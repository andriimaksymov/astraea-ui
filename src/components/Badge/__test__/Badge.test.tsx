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

    expect(getByText("Child Component")).toBeDefined();
    expect(getByText("5")).toBeDefined();
  });

  it("should have custom className", () => {
    const { container } = render(
      <Badge badgeContent={5} className="custom-class">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstElementChild.classList).include(/custom-class/);
  });

  it("should be invisible", () => {
    const { container } = render(
      <Badge badgeContent={5} invisible>
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstElementChild.classList).include(/invisible/);
  });

  it("should have primary color", () => {
    const { container } = render(
      <Badge badgeContent={5} color="primary">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild.childNodes[1]).include(/primaryColor/);
  });

  it("should have primary color", () => {
    const { container } = render(
      <Badge badgeContent={5} color="primary">
        <div>Child Component</div>
      </Badge>,
    );

    expect(container.firstChild.childNodes[1]).include(/primaryColor/);
  });
});
