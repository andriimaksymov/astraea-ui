import { InputProps } from "../src/components/Input";

export type ComboboxItem = {
  /**
   * Combobox item value.
   */
  value: string | number;
  /**
   * Combobox item key.
   */
  key?: string | number;
};

export type ComboboxProps = {
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 5 inclusive.
   * @default 1
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * The array of items.
   */
  items?: Array<ComboboxItem>;
  /**
   * The number of items that will be shown.
   */
  maxItems?: number;
  /**
   * The value of the combobox.
   */
  value?: string;
  /**
   * Callback fired when the input value changes.
   * @param value: The new value of the text input.
   */
  onInputChange?: (value: string) => void;
  /**
   * Callback fired when the value changes.
   * @param value The new value of the component.
   */
  onSelect?: (value: ComboboxItem | null | undefined) => void;
} & Omit<InputProps, "value" | "onChange" | "onSelect">;
