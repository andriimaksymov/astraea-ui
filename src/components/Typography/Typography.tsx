import clsx from "clsx";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

import { TypographyProps } from '../../../types';
import { PolymorphicRef } from "../../../types/utils";

import styles from "./Typography.module.sass";

/**
 * Base Typography component.
 * @template T - The type of element to render.
 * @param {TypographyProps<T>} props - The props for the Typography component.
 * @param {PolymorphicRef<T>} ref - The ref object for the component.
 * @returns {JSX.Element} - The rendered Typography component.
 */

const TypographyBase = <T extends ElementType>(
  {
    component,
    children,
    className,
    variant = "body1",
    weight,
    ...rest
  }: TypographyProps<T> &
    Omit<ComponentPropsWithRef<T>, keyof TypographyProps<T>>,
  ref: PolymorphicRef<T>,
): JSX.Element => {
  const Component = component || "span";

  const classNames = clsx(
    styles.root,
    className,
    variant && [styles[variant]],
    weight && [styles[weight]],
  );

  return (
    <Component ref={ref} className={classNames} {...rest}>
      {children}
    </Component>
  );
};

const Typography = forwardRef(TypographyBase) as typeof TypographyBase;

export default Typography;
