import { forwardRef, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Card.module.sass";

export type CardElevation = 0 | 1 | 2 | 3 | 4 | 5;

export type CardProps = {
  /**
   * Border color of the card.
   */
  borderColor?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The content render inside the card.
   */
  children?: ReactNode;
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 5 inclusive.
   * @default 1
   */
  elevation?: CardElevation;
  /**
   * If 'true' the card has 1px border.
   * @default false
   */
  hasBorder?: boolean;
  /**
   * Padding size for the card.
   * @default "medium"
   */
  padding?: "none" | "small" | "medium" | "large";
} & HTMLAttributes<HTMLDivElement>;

/**
 * Card component for.
 * @param {CardProps} props The props for the Card component.
 * @returns {JSX.Element} The Card component.
 */

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      hasBorder,
      borderColor,
      className,
      children,
      padding = "medium",
      elevation = 1,
      ...props
    },
    ref,
  ) => {
    const classNames = clsx(
      styles.root,
      className,
      elevation && [styles[`elevation${elevation}`]],
      {
        [styles.withBorder]: hasBorder || borderColor,
        [styles[
          `padding${padding.charAt(0).toUpperCase()}${padding.slice(1)}`
        ]]: padding,
      },
    );

    const combinedStyle = {
      ...(borderColor && { borderColor }),
    };

    return (
      <div ref={ref} className={classNames} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
