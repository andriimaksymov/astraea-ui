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
