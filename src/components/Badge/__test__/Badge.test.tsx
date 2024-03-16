import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Badge from "../Badge";

describe("Badge component", () => {
  it("should render the badge with default props", () => {
    render(<Badge badgeContent="1" />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should render the badge with custom class", () => {
    render(
      <Badge
        data-testid="customClass"
        className="custom-class"
        badgeContent="2"
        color="primary"
      />,
    );
    expect(screen.getByTestId("customClass")).toHaveClass("custom-class");
  });

  it("should render the badge as invisible", () => {
    render(<Badge data-testid="invisible" badgeContent="3" invisible />);
    expect(screen.getByTestId("invisible")).toHaveClass(/invisible/);
  });

  it("should render the badge with specified color", () => {
    render(<Badge badgeContent="4" color="primary" />);
    expect(screen.getByText("4")).toHaveClass(/primary/);
  });

  it("should render the badge with specified variant", () => {
    render(<Badge data-testid="badge" variant="dot" />);
    expect(screen.getByTestId("badge").firstChild).toHaveClass(/dot/);
  });
});
