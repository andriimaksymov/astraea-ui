import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../Button";

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" />
  </svg>
);

describe("Button component", () => {
  it("should render button correctly", () => {
    render(<Button>Button</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDefined();
  });

  it("should render button as a link and check for href attribute", () => {
    render(
      <Button component="a" href="/">
        Link Button
      </Button>,
    );
    const button = screen.getByText("Link Button");

    expect(button).toBeDefined();
    expect(button.getAttribute("href")).not.toBeNull();
  });

  it("should render button with primary color", () => {
    render(<Button>Link Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDefined();
    expect(button.classList).include(/primary/);
  });

  it("should render disabled button and have 'disabled' className when disabled props is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDefined();
    expect(button.classList.contains("disabled")).not.toBeNull();
    expect(button.getAttribute("disabled")).not.toBeNull();
  });

  it("should render button with start icon", () => {
    render(<Button startIcon={PlusIcon}>Button with start icon</Button>);

    const button = screen.getByRole("button");
    expect(button.firstElementChild.classList).include(/iconWrap/);
  });

  it("should render button with end icon", () => {
    render(<Button endIcon={PlusIcon}>Button with start icon</Button>);

    const button = screen.getByRole("button");
    expect(button.lastElementChild.classList).include(/iconWrap/);
  });
});
