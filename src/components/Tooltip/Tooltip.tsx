import clsx from "clsx";
import {
  MouseEvent,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./Tooltip.module.sass";

export type TooltipProps = {
  /**
   * Action that triggers the tooltip. Can be 'hover' or 'click'.
   * @default 'hover'
   */
  action?: "hover" | "click";
  /**
   * If true, adds an arrow to the tooltip.
   * default 'false'
   */
  arrow?: boolean;
  /**
   * Tooltip reference element.
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * Tooltip content. Zero-length content string, undefined, null and false are never displayed.
   */
  content?: ReactNode;
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * default 0
   */
  delay?: number;
  /**
   * If true, the component is shown.
   * default 'false'
   */
  open?: boolean;
  /**
   * Tooltip placement.
   * default 'bottom'
   */
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  /**
   * Theme style of the tooltip.
   * default 'dark'
   */
  theme?: "dark" | "light";
  /**
   * The width of tooltip.
   * default 'auto'
   */
  width?: number | "auto";
};

type EventType = Event | MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: EventType) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

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
      data-testid="tooltipWrapper"
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
          role="tooltip"
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
