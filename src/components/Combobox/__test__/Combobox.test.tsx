import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Combobox from "../Combobox";

describe("Combobox component", () => {
  it("should render combobox component correctly", () => {
    render(<Combobox />);
    const progress = screen.getByTestId("astraea-combobox");

    expect(progress).toBeDefined();
  });
});
