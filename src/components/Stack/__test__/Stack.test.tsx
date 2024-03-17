import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Stack from "../Stack";

describe("Stack component", () => {
  it("should render stack component correctly with children", () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>,
    );
    const child1 = screen.getByText("Child 1");
    const child2 = screen.getByText("Child 2");
    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
});
