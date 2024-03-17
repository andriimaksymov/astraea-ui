import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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

    expect(combobox).toBeInTheDocument();
  });

  it("should render combobox with list of values", () => {
    render(<Combobox items={animals} />);
    const combobox = screen.getByTestId("astraea-combobox");
    const input = screen.getByRole("combobox");

    expect(combobox).toBeInTheDocument();
    fireEvent.click(input);
    const menu = screen.getByTestId("astraea-combobox-menu");
    expect(menu).toBeInTheDocument();
    expect(menu.children.length).toBe(
      animals.length < DEFAULT_COMBOBOX_ITEMS_LENGTH
        ? animals.length
        : DEFAULT_COMBOBOX_ITEMS_LENGTH,
    );
  });

  it("should render input field and accepts user input", async () => {
    const onInputChange = vi.fn();
    const { getByRole } = render(<Combobox onInputChange={onInputChange} />);
    const input = getByRole("combobox");
    fireEvent.change(input, { target: { value: "Test" } });
    await waitFor(() => expect(onInputChange).toHaveBeenCalledWith("Test"));
  });

  it("should open dropdown menu when input field is clicked", () => {
    render(<Combobox items={animals} />);
    const input = screen.getByRole("combobox");
    fireEvent.click(input);
    expect(screen.getByTestId("astraea-combobox-menu")).toHaveClass(
      /openSuggestionMenu/,
    );
  });
});
