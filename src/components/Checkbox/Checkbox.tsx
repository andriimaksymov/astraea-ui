import clsx from "clsx";
import { ChangeEvent, forwardRef, useState } from "react";

import { CheckboxProps } from '../../../types';

import styles from "./Checkbox.module.sass";
import { DefaultCheckedIcon, DefaultUnCheckedIcon } from "./Checkbox.Icons";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      icon: Icon,
      checkedIcon: CheckedIcon,
      labelPlacement = "end",
      ...props
    },
    ref,
  ) => {
    // Initialize checked state based on props
    const defaultChecked = props.checked ?? props.defaultChecked ?? false;
    const [checked, setChecked] = useState<boolean>(defaultChecked);

    const classNames = clsx(
      styles.root,
      className,
      props.disabled && styles.disabled,
      {
        [styles.placementStart]: labelPlacement === "start",
        [styles.placementTop]: labelPlacement === "top",
        [styles.placementBottom]: labelPlacement === "bottom",
        [styles.placementEnd]: labelPlacement === "end",
      },
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(!checked);
      props.onChange?.(e);
    };

    return (
      <label htmlFor={props.id} className={classNames}>
        <input
          ref={ref}
          type="checkbox"
          className={styles.input}
          {...props}
          checked={checked}
          onChange={handleChange}
        />
        {checked ? (
          CheckedIcon ? (
            <CheckedIcon className={styles.icon} />
          ) : (
            <DefaultCheckedIcon className={styles.icon} />
          )
        ) : Icon ? (
          <Icon className={styles.icon} />
        ) : (
          <DefaultUnCheckedIcon className={styles.icon} />
        )}
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

export default Checkbox;
