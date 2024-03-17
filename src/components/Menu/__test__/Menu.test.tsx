import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Menu from "../Menu";

describe("Menu component", () => {
  it("should render children when isOpen is true", () => {
    const { getByText } = render(
      <Menu isOpen={true}>
        <div>Child Element</div>
      </Menu>,
    );
    const childElement = getByText("Child Element");
    expect(childElement).toBeInTheDocument();
  });

  it("does not render children when isOpen is false", () => {
    const { queryByText } = render(
      <Menu isOpen={false}>
        <div>Child Element</div>
      </Menu>,
    );
    const childElement = queryByText("Child Element");
    expect(childElement).toBeNull();
  });
});
