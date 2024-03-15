import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Input from "../Input";

describe("Input component", () => {
  it("should render input component correctly", () => {
    render(<Input placeholder="input" />);
    const progress = screen.getByPlaceholderText("input");

    expect(progress).toBeInTheDocument();
  });
});
