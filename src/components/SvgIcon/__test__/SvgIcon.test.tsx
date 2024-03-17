import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import PlusIcon from "../../../assets/icons/PlusIcon";
import SvgIcon from "../SvgIcon";

describe("SvgIcon component", () => {
  it("should render svg icon component correctly", () => {
    render(<SvgIcon icon={PlusIcon} data-testid="svg" />);
    expect(screen.getByTestId("svg")).toBeInTheDocument();
  });
});
