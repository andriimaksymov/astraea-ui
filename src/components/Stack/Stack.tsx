import clsx from "clsx";

import { StackProps } from '../../../types';

import styles from "./Stack.module.sass";

/**
 * Stack component for arranging and spacing its children.
 * @param {StackProps} props - The props for the Stack component.
 * @returns {JSX.Element} - The rendered Stack component.
 */

const Stack = ({
  align,
  justify,
  direction = "row",
  spacing,
  wrap = "nowrap",
  className,
  children,
  ...rest
}: StackProps) => {
  const defaultStyle = {
    ...(typeof spacing === "string" && {
      gridGap: spacing,
    }),
  };

  const classNames = clsx(styles.root, className, {
    [styles[wrap]]: wrap,
    [styles[direction]]: direction,
    [styles[`align-${align}`]]: align,
    [styles[`spacing${spacing}`]]: spacing && typeof spacing === "number",
    [styles[`justify-${justify}`]]: justify,
  });

  return (
    <div
      className={classNames}
      {...rest}
      style={{
        ...defaultStyle,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
