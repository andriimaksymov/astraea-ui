import { InputProps } from "../Input";
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
/**
 * Combobox component for selecting items from a dropdown list.
 * @param {ComboboxProps} props The props for the Combobox component.
 * @returns {JSX.Element} The Combobox component.
 */
export declare const DEFAULT_COMBOBOX_ITEMS_LENGTH = 5;
declare function Combobox({ elevation, items, maxItems, value, onInputChange, onSelect, ...inputProps }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export default Combobox;
