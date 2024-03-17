import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";

import Progress from "../Progress";

describe("Progress component", () => {
  it("should render progress with the correct progress value", () => {
    render(<Progress data-testid="progress-bar" progress={50} />);
    expect(screen.getByTestId("progress-bar").childNodes[0]).toHaveStyle(
      "width: 50%",
    );
  });

  it("should applied the appropriate color class based on the color prop", () => {
    render(
      <Progress data-testid="progress-bar" progress={10} color="success" />,
    );
    expect(screen.getByTestId("progress-bar").childNodes[0]).toHaveClass(
      /success/,
    );
  });

  it("should render progress with striped class when striped prop is true", () => {
    render(<Progress data-testid="progress-bar" progress={10} striped />);
    expect(screen.getByTestId("progress-bar").childNodes[0]).toHaveClass(
      /striped/,
    );
  });

  it("renders the label correctly if provided", () => {
    render(<Progress progress={10} label="50%" />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });
});
