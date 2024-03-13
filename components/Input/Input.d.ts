import { ComponentPropsWithoutRef, ReactNode } from "react";
export type InputProps = {
    /**
     * Override or extend the style applied to the input.
     */
    controlClassName?: string;
    /**
     * Override or extend the style applied to the input wrapper.
     */
    className?: string;
    /**
     * End input adornment for this component.
     */
    endAdornment?: ReactNode;
    /**
     * If true the component will have error styles.
     * @default false
     */
    hasError?: boolean;
    /**
     * Start input adornment for this component.
     */
    startAdornment?: ReactNode;
    /**
     * The variant to use.
     * @default 'contained'
     */
    variant?: "contained" | "outlined" | "underline";
} & ComponentPropsWithoutRef<"input">;
/**
 * Input component for receiving user input.
 * @param {InputProps} props - The props for the Input component.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to attach to the input element.
 * @returns {JSX.Element} - The rendered Input component.
 */
declare const Input: import("react").ForwardRefExoticComponent<{
    /**
     * Override or extend the style applied to the input.
     */
    controlClassName?: string | undefined;
    /**
     * Override or extend the style applied to the input wrapper.
     */
    className?: string | undefined;
    /**
     * End input adornment for this component.
     */
    endAdornment?: ReactNode;
    /**
     * If true the component will have error styles.
     * @default false
     */
    hasError?: boolean | undefined;
    /**
     * Start input adornment for this component.
     */
    startAdornment?: ReactNode;
    /**
     * The variant to use.
     * @default 'contained'
     */
    variant?: "contained" | "outlined" | "underline" | undefined;
} & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
