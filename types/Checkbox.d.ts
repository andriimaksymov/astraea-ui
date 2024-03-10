import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type CheckboxProps = {
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * Icon to be used if checkbox is checked.
   */
  checkedIcon?: ElementType;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label?: ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: "top" | "start" | "bottom" | "end";
  /**
   * Icon to be used if checkbox is unchecked.
   */
  icon?: ElementType;
} & ComponentPropsWithoutRef<"input">;
