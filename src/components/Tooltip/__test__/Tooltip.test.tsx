import { describe, expect, it } from "vitest";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

import Tooltip from "../Tooltip";

describe("Tooltip component", () => {
  it("should render tooltip with children correctly", () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("should show tooltip on hover", async () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>,
    );
    console.log(1111111111111111, screen.queryByRole("tooltip"));
    fireEvent.mouseEnter(screen.getByText("Hover me"));
    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).toBeInTheDocument();
    });
  });

  it("should hide tooltip on mouse leave", async () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>,
    );
    const buttonElement = screen.getByText("Hover me");
    fireEvent.mouseEnter(buttonElement);
    fireEvent.mouseLeave(buttonElement);
    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("should show tooltip on click", async () => {
    render(
      <Tooltip action="click" content="Tooltip Content">
        <button>Click me</button>
      </Tooltip>,
    );
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).toBeInTheDocument();
    });
  });

  it("should show tooltip after delay", async () => {
    render(
      <Tooltip action="hover" content="Tooltip content" delay={1000}>
        <button>Hover me with delay</button>
      </Tooltip>,
    );

    const button = screen.getByText("Hover me with delay");

    fireEvent.mouseEnter(button);

    // Ensure tooltip does not appear immediately
    expect(screen.queryByText("Tooltip content")).toBeNull();

    // Wait for the delay
    await waitFor(
      () => {
        expect(screen.getByText("Tooltip content")).toBeInTheDocument();
      },
      { timeout: 1100 },
    );
  });
});
