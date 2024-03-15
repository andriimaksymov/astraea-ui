import { describe, it } from "vitest";
import { render } from "@testing-library/react";

import Tooltip from "../Tooltip";

describe("Tooltip component", () => {
  it("should response on hover", () => {
    render(
      <Tooltip action="click" content="Simple string tooltip content">
        Tooltip with hover action
      </Tooltip>,
    );
  });
});
