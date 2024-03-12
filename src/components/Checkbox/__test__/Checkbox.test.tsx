import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Checkbox from "../Checkbox";

describe("Checkbox component", () => {
  it("should render checkbox component correctly", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDefined();
  });
});
