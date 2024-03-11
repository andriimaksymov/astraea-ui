import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

import styles from "./Radio.module.sass";

export type RadioProps = {
  /**
   * Override or extend the style applied to the component
   */
  className?: string;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label?: ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: "start" | "end";
} & ComponentPropsWithoutRef<"input">;

const DefaultIcon = ({ ...props }) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const DefaultCheckedIcon = ({ ...props }) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
  </svg>
);

/**
 * Radio component for selecting a single option from a list.
 * @param {RadioProps} props - The props for the Radio component.
 * @returns {JSX.Element} - The rendered Radio component.
 */

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, labelPlacement = "end", ...props }, ref) => {
    const classNames = clsx(
      styles.root,
      className,
      props.disabled && [styles.disabled],
      {
        [styles.placementStart]: labelPlacement === "start",
        [styles.placementEnd]: labelPlacement === "end",
      },
    );

    return (
      <label className={classNames}>
        <input ref={ref} type="radio" className={styles.input} {...props} />
        <div className={styles.iconWrap}>
          {(props.checked || props.defaultChecked) && (
            <DefaultCheckedIcon
              className={clsx(styles.icon, styles.checkedIcon)}
            />
          )}
          <DefaultIcon className={styles.icon} />
        </div>
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
