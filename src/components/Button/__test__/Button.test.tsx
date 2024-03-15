import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../Button";
import PlusIcon from "../../../assets/icons/PlusIcon";

describe("Button component", () => {
  it("should render button correctly", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render button as a link and check for href attribute", () => {
    render(
      <Button component="a" href="/">
        Link Button
      </Button>,
    );
    const button = screen.getByText("Link Button");

    expect(button).toBeInTheDocument();
    expect(button.getAttribute("href")).not.toBeNull();
  });

  it("should render button with primary color", () => {
    render(<Button color="primary">Link Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.className).toContain("primary");
  });

  it("should render disabled button and have 'disabled' className when disabled props is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.className).toContain("disabled");
    expect(button.getAttribute("disabled")).not.toBeNull();
  });

  it("should render button with icon at the start", () => {
    render(<Button startIcon={PlusIcon}>Button with start icon</Button>);

    const button = screen.getByRole("button");
    const svg = button.querySelector("svg");

    expect(button).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
    expect(button.firstElementChild.childNodes[0]).toBe(svg);
  });

  it("should render button with icon at the end", () => {
    render(<Button endIcon={PlusIcon}>Button with end icon</Button>);

    const button = screen.getByRole("button");
    const svg = button.querySelector("svg");

    expect(button).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
    expect(button.lastElementChild.childNodes[0]).toBe(svg);
  });
});
