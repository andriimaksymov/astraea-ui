import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import PlusIcon from "../../../assets/icons/PlusIcon";

import IconButton from "../IconButton";

describe("IconButton component", () => {
  it("should render iconButton component correctly", () => {
    render(<IconButton icon={PlusIcon} />);
    const progress = screen.getByRole("button");

    expect(progress).toBeInTheDocument();
  });
});
