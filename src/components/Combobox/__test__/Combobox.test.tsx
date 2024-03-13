import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Combobox, { DEFAULT_COMBOBOX_ITEMS_LENGTH } from "../Combobox";

const animals = [
  { value: "dog", key: "Dog" },
  { value: "cat", key: "Cat" },
  { value: "lion", key: "Lion" },
  { value: "tiger", key: "Tiger" },
  { value: "elephant", key: "Elephant" },
  { value: "giraffe", key: "Giraffe" },
  { value: "zebra", key: "Zebra" },
  { value: "penguin", key: "Penguin" },
  { value: "panda", key: "Panda" },
  { value: "koala", key: "Koala" },
];

describe("Combobox component", () => {
  it("should render combobox component correctly", () => {
    render(<Combobox />);
    const combobox = screen.getByTestId("astraea-combobox");

    expect(combobox).toBeDefined();
  });

  it("should render combobox with list of values", () => {
    render(<Combobox items={animals} />);
    const combobox = screen.getByTestId("astraea-combobox");
    const input = screen.getByRole("combobox");

    expect(combobox).toBeDefined();
    fireEvent.click(input);
    const menu = screen.getByTestId("astraea-combobox-menu");
    expect(menu).toBeDefined();
    expect(menu.children.length).toBe(
      animals.length < DEFAULT_COMBOBOX_ITEMS_LENGTH
        ? animals.length
        : DEFAULT_COMBOBOX_ITEMS_LENGTH,
    );
  });
});
