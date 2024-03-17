import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Typography from "../Typography";

describe("Typography component", () => {
  it("should render typography correctly", () => {
    render(<Typography>Typography Text</Typography>);
    expect(screen.getByText("Typography Text")).toBeInTheDocument();
  });

  it("should render typography with class prop", () => {
    render(<Typography className="custom-class">Custom Class</Typography>);
    expect(screen.getByText("Custom Class")).toHaveClass("custom-class");
  });

  it("should render typography with specified variant", () => {
    render(<Typography variant="h1">Heading Text</Typography>);
    expect(screen.getByText("Heading Text")).toHaveClass(/h1/);
  });

  it("should render typography with specified weight", () => {
    render(<Typography weight="bold">Bold Text</Typography>);
    expect(screen.getByText("Bold Text")).toHaveClass(/bold/);
  });

  it("should render typography with custom component", () => {
    const { container } = render(
      <Typography component="h1">Custom Component</Typography>,
    );
    const typographyElement = container.querySelector("h1");
    expect(typographyElement).toBeInTheDocument();
  });
});
