import { forwardRef } from "react";
import clsx from "clsx";

import { CardProps } from "../../../types";

import styles from "./Card.module.sass";

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
