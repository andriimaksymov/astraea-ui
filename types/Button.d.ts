import { ElementType, ReactNode } from "react";

export type ButtonProps<T extends ElementType> = {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * The color of the component.
   * @default 'inherit'
   */
  color?: "inherit" | "primary" | "secondary";
  /**
   * The component to use.
   */
  component?: T;
  /**
   * If 'true' the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon that will be placed after content.
   */
  endIcon?: ElementType;
  /**
   * The component will be stretched by all content.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /**
   * The icon that will be placed before content.
   */
  startIcon?: ElementType;
  /**
   * The variant of the component.
   * @default 'contained'
   */
  variant?: "contained" | "outlined" | "text";
};
