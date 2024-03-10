import { HTMLAttributes, ReactNode } from "react";

export type DividerProps = {
  /**
   * Override or extend styles applied to the component.
   */
  className?: string;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical";
} & HTMLAttributes<"div">;
