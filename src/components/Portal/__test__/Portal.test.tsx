import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Portal from "../Portal";

describe("Portal component", () => {
  beforeEach(() => {
    // Create a portal root element in the document body
    const portalRoot = document.createElement("div");
    portalRoot.id = "portal-root";
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    // Clean up the portal root element from the document body
    const portalRoot = document.getElementById("portal-root");
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it("should render children into a portal container", () => {
    render(
      <Portal>
        <div>Hello, world!</div>
      </Portal>,
    );

    expect(document.body).toContainHTML("<div>Hello, world!</div>");
  });

  it("should create and append a container element to the document body when mounted", () => {
    render(<Portal />);

    const portalContainer = document.querySelector(".portal");

    expect(portalContainer).toBeInTheDocument();
  });

  it("should remove the container element from the document body when unmounted", () => {
    const { unmount } = render(<Portal />);

    const portalContainer = document.querySelector(".portal");
    expect(portalContainer).toBeInTheDocument();

    unmount();

    expect(portalContainer).not.toBeInTheDocument();
  });

  it("should applied the provided className to the container element when mounted", () => {
    render(<Portal className="custom-portal" />);

    const portalContainer = document.querySelector(".portal");
    expect(portalContainer).toHaveClass(/custom-portal/);
  });
});
