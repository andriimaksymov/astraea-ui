import clsx from "clsx";
import React from "react";

import styles from "./Checkbox.module.sass";
import { DefaultCheckedIcon, DefaultUnCheckedIcon } from "./Checkbox.Icons";

export type CheckboxProps = {
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * Icon to be used if checkbox is checked.
   */
  checkedIcon?: React.ElementType;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label?: React.ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: "top" | "start" | "bottom" | "end";
  /**
   * Icon to be used if checkbox is unchecked.
   */
  icon?: React.ElementType;
} & React.ComponentPropsWithoutRef<"input">;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
    const [checked, setChecked] = React.useState<boolean>(defaultChecked);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
