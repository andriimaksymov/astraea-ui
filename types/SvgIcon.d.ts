import { ElementType } from "react";

export type SvgIconProps = {
  /**
   * Override or extend styles applied to the component
   */
  className?: string;
  /**
   * The color of the component
   * @default 'inherit'
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "muted";
  /**
   * The fontSize applied to the icon. Default to 24px, but can be configure to inherit font size
   * @default 'medium'
   */
  fontSize?: "inherit" | "large" | "medium" | "small";
  /**
   * Svg icon used for the root node
   */
  icon: ElementType;
};
