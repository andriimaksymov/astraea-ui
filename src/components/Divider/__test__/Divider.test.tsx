import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Divider from "../Divider";

describe("Divider component", () => {
  it("should render divider component correctly", () => {
    render(<Divider />);
    const progress = screen.getByTestId("astraea-divider");

    expect(progress).toBeInTheDocument();
  });
});
