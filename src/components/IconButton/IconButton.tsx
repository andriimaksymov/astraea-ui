import clsx from "clsx";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

import { IconButtonProps } from "../../../types/IconButton";
import { PolymorphicRef } from "../../../types/utils";

import styles from "./IconButton.module.sass";

/**
 * A button with an icon.
 * @template T The type of element to use as the component.
 * @param {IconButtonProps<T>} props The props for the IconButton.
 * @param {PolymorphicRef<T>} ref The ref for the IconButton.
 * @returns {JSX.Element} The IconButton component.
 */

const IconButtonBase = <T extends ElementType = "button">(
  {
    component,
    icon: Icon,
    round,
    color,
    className,
    iconClassName,
    disabled,
    size = "medium",
    ...rest
  }: IconButtonProps<T> &
    Omit<ComponentPropsWithRef<T>, keyof IconButtonProps<T>>,
  ref: PolymorphicRef<T>,
) => {
  const Component = component || "button";

  const classNames = clsx(
    styles.root,
    className,
    color && styles[color],
    disabled && styles.disabled,
    round && styles.round,
  );

  const iconClassNames = clsx(styles.icon, iconClassName, styles[size]);

  return (
    <Component ref={ref} {...rest} className={classNames}>
      <Icon className={iconClassNames} />
    </Component>
  );
};

const IconButton = forwardRef(IconButtonBase) as typeof IconButtonBase;

export default IconButton;
