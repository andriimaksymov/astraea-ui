import clsx from "clsx";
import { forwardRef } from "react";

import { SwitchProps } from '../../../types';

import styles from "./Switch.module.sass";

/**
 * Switch component to implement toggle switches.
 * @param {SwitchProps} props The props for the Chip component.
 * @param {React.Ref<HTMLDivElement>} ref The ref for the Chip.
 * @returns {JSX.Element} The Chip component.
 */

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      checked,
      className,
      disabled,
      label,
      labelPlacement = "start",
      size,
      onChange,
      ...props
    },
    ref,
  ) => {
    const labelPlacementClassName =
      "labelPlacement" +
      labelPlacement.charAt(0).toUpperCase() +
      labelPlacement.slice(1);
    const classNames = clsx(
      styles.root,
      size && styles[size],
      disabled && styles.disabled,
      className,
    );

    return (
      <div className={classNames} ref={ref} {...props}>
        <label
          className={clsx(
            styles.label,
            label && styles[labelPlacementClassName],
          )}
        >
          <input
            type="checkbox"
            className={styles.input}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <span className={styles.switch} />
          <span className={styles.labelText}>{label}</span>
        </label>
      </div>
    );
  },
);

export default Switch;
