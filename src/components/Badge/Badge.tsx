import clsx from "clsx";

import { BadgeProps } from "../../../types";

import styles from "./Badge.module.sass";

const Badge = ({
  anchorOrigin = {
    vertical: "top",
    horizontal: "right",
  },
  badgeContent,
  className,
  children,
  color = "default",
  invisible,
  variant = "standard",
  ...props
}: BadgeProps) => {
  const classNames = clsx(styles.root, className, {
    [styles.invisible]: invisible,
  });

  const anchorClassNames = clsx(
    styles.content,
    styles[`${color}Color`],
    styles[variant],
    {
      [styles[
        `anchorOrigin${anchorOrigin.vertical}${anchorOrigin.horizontal}`
      ]]: anchorOrigin.vertical && anchorOrigin.horizontal,
    },
  );

  return (
    <div className={classNames} {...props}>
      {children}
      <span className={anchorClassNames}>
        {variant !== "dot" && badgeContent}
      </span>
    </div>
  );
};

export default Badge;
