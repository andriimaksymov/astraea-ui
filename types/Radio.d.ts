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
