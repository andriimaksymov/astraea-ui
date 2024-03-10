import clsx from "clsx";

import { DividerProps } from "../../../types/Divider";

import styles from "./Divider.module.sass";

/**
 * Divider component for creating horizontal or vertical dividing lines.
 * @param {DividerProps} props The props for the Divider component.
 * @returns {JSX.Element} The Divider component.
 */

const Divider = ({
  className,
  orientation = "horizontal",
  children,
}: DividerProps) => {
  const classNames = clsx(styles.root, styles[orientation], className, {
    [styles.withChildren]: children,
    [styles.withChildrenVertical]: children && orientation === "vertical",
  });

  return (
    <div className={classNames}>
      <span className={styles.inner}>{children}</span>
    </div>
  );
};

export default Divider;
