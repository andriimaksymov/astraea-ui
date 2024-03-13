import { ChangeEvent, ReactNode } from "react";
export type SwitchSize = "small" | "medium" | "large";
export type SwitchLabelPlacement = "top" | "start" | "bottom" | "end";
export type SwitchProps = {
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * If 'true', the component is checked.
     * @default false
     */
    checked?: boolean;
    /**
     * If 'true', the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: SwitchLabelPlacement;
    /**
     * The size of the component.
     * @default 'medium;
     */
    size?: "small" | "medium" | "large";
    /**
     * Callback fired when the state is changed.
     *
     * function(event: React.ChangeEvent<HTMLInputElement>) => void
     * event: The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean).
     * @param e
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Switch component to implement toggle switches.
 * @param {SwitchProps} props The props for the Chip component.
 * @param {React.Ref<HTMLDivElement>} ref The ref for the Chip.
 * @returns {JSX.Element} The Chip component.
 */
declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLDivElement>>;
export default Switch;
