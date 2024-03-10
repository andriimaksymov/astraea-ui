import clsx from "clsx";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

import { ButtonProps, MenuItemProps } from '../../../types';
import { PolymorphicRef } from "../../../types/utils";

import styles from "./MenuItem.module.sass";

/**
 * Base MenuItem component.
 * @param {MenuItemProps<T>} props - The props for the MenuItem component.
 * @param {React.Ref<HTMLElement>} ref - The ref to attach to the MenuItem component.
 * @returns {JSX.Element} - The rendered MenuItem component.
 */

const MenuItemBase = <T extends ElementType = "div">(
  {
    children,
    component,
    className,
    isActive,
    ...rest
  }: MenuItemProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>,
  ref: PolymorphicRef<T>,
) => {
  const Component = component || "div";

  const classNames = clsx(
    styles.root,
    {
      [styles.active]: isActive,
      // [styles.cursorPointer]: rest.onClick, // todo fix
    },
    className,
  );

  return (
    <Component ref={ref} className={classNames} {...rest}>
      {children}
    </Component>
  );
};

const MenuItem = forwardRef(MenuItemBase) as typeof MenuItemBase;

export default MenuItem;
