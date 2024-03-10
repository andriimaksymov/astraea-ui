import clsx from "clsx";
import { MouseEvent, useRef, useState } from "react";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

import { TooltipProps } from "../../../types/Tooltip";

import styles from "./Tooltip.module.sass";

/**
 * A component that displays a tooltip when triggered by user action.
 * @param {TooltipProps} props - The props for the Tooltip component.
 * @returns {JSX.Element} - The rendered Tooltip component.
 */

const Tooltip = ({
  action = "hover",
  arrow,
  content,
  className,
  children,
  delay = 0,
  open,
  placement = "bottom",
  theme = "dark",
  width = "auto",
}: TooltipProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Sets a timeout before showing the tooltip.
   */
  const timeout = () => {
    setTimeout(() => {
      setActive(true);
    }, delay ?? 400);
  };

  const showTip = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    timeout();
  };

  const hideTip = () => {
    setActive(false);
  };

  useOnClickOutside(ref, hideTip);

  return (
    <div
      ref={ref}
      role="tooltip"
      className={styles.wrapper}
      {...(action === "hover"
        ? {
            onMouseEnter: showTip,
            onMouseLeave: hideTip,
          }
        : {
            onClick: showTip,
          })}
    >
      {children}
      {content && (active || open) && (
        <div
          style={{ width }}
          className={clsx(
            styles.root,
            styles[placement],
            styles[theme],
            className,
          )}
        >
          {content}
          {arrow && <span className={styles.arrow} />}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
