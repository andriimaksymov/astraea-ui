import clsx from "clsx";

import { ProgressProps } from "../../../types/Progress";

import styles from "./Progress.module.sass";

/**
 * Progress component to display progress bars.
 * @param {ProgressProps} props - The props for the Progress component.
 * @returns {JSX.Element} - The rendered Progress component.
 */

const Progress = ({
  animated,
  color = "primary",
  className,
  classNameBar,
  label,
  progress = 0,
  striped,
}: ProgressProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div
        className={clsx(styles.bar, styles[color], classNameBar, {
          [styles.striped]: striped,
          [styles.animated]: striped && animated,
        })}
        style={{ width: `${progress}%` }}
      >
        {label}
      </div>
    </div>
  );
};

export default Progress;
