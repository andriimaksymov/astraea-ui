import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Chip from "../Chip";

describe("Chip component", () => {
  it("should render chip component correctly", () => {
    render(<Chip>Default chip</Chip>);
    const checkbox = screen.getByText("Default chip");

    expect(checkbox).toBeInTheDocument();
  });
});
