import { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Divider.module.sass";

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
} & ComponentPropsWithoutRef<"div">;

/**
 * Divider component for creating horizontal or vertical dividing lines.
 * @param {DividerProps} props The props for the Divider component.
 * @returns {JSX.Element} The Divider component.
 */

const Divider = ({
  className,
  orientation = "horizontal",
  children,
  ...rest
}: DividerProps) => {
  const classNames = clsx(styles.root, styles[orientation], className, {
    [styles.withChildren]: children,
    [styles.withChildrenVertical]: children && orientation === "vertical",
  });

  return (
    <div className={classNames} {...rest}>
      <span className={styles.inner}>{children}</span>
    </div>
  );
};

export default Divider;
