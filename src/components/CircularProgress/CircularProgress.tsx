import clsx from "clsx";

import { CircularProgressProps } from '../../../types';

import styles from "./CircularProgress.module.sass";

/**
 * CircularProgress component for displaying circular progress indicators.
 * @param {CircularProgressProps} props The props for the CircularProgress component.
 * @returns {JSX.Element} The CircularProgress component.
 */

const CircularProgress = ({
  color = "primary",
  className,
  size = 40,
  thickness = 3.6,
  value = 0,
  variant = "indeterminate",
}: CircularProgressProps) => {
  const strokeDasharray = 126.92;
  const strokeDashoffset = strokeDasharray - (strokeDasharray / 100) * value;

  return (
    <div
      className={clsx(styles.root, styles[color], styles[variant], className)}
      style={{
        width: size,
        height: size,
        transform: "rotate(-90deg)",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="22 22 44 44">
        <circle
          className={clsx(styles.icon, {
            [styles.circleIndeterminate]: variant === "indeterminate",
          })}
          cx="44"
          cy="44"
          r="20.2"
          strokeWidth={thickness}
          style={{
            strokeDasharray,
            strokeDashoffset:
              variant === "indeterminate" ? "96px" : strokeDashoffset,
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
