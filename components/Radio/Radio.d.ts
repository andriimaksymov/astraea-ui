import { ComponentPropsWithoutRef, ReactNode } from "react";
export type RadioProps = {
    /**
     * Override or extend the style applied to the component
     */
    className?: string;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "start" | "end";
} & ComponentPropsWithoutRef<"input">;
/**
 * Radio component for selecting a single option from a list.
 * @param {RadioProps} props - The props for the Radio component.
 * @returns {JSX.Element} - The rendered Radio component.
 */
declare const Radio: import("react").ForwardRefExoticComponent<{
    /**
     * Override or extend the style applied to the component
     */
    className?: string | undefined;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "end" | "start" | undefined;
} & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Radio;
