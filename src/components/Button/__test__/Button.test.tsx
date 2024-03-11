import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Button from "../Button";

describe("Button component", () => {
  it("should render button correctly", () => {
    const { getByText } = render(<Button>Child Component</Button>);

    expect(getByText("Child Component")).toBeInTheDocument();
  });
});
