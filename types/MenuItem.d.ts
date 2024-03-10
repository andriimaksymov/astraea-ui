import { ElementType, ReactNode } from "react";

export type MenuItemProps<T extends ElementType> = {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * The component to use.
   */
  component?: T;
  /**
   * If 'true' the component has active styles.
   * @default false
   */
  isActive?: boolean;
};
