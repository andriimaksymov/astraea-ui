import clsx from "clsx";
import { forwardRef } from "react";

import { InputProps } from '../../../types';

import styles from "./Input.module.sass";

/**
 * Input component for receiving user input.
 * @param {InputProps} props - The props for the Input component.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to attach to the input element.
 * @returns {JSX.Element} - The rendered Input component.
 */

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      controlClassName,
      endAdornment,
      hasError,
      startAdornment,
      variant = "contained",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={clsx(
          styles.root,
          {
            [styles.startAdornment]: startAdornment,
            [styles.endAdornment]: endAdornment,
            [styles.disabled]: props.disabled,
            [styles.hasError]: hasError,
            [styles[variant]]: !!variant,
          },
          className,
        )}
      >
        {startAdornment && (
          <div className={styles.adornment}>{startAdornment}</div>
        )}
        <input
          ref={ref}
          className={clsx(styles.control, controlClassName)}
          {...props}
        />
        {endAdornment && <div className={styles.adornment}>{endAdornment}</div>}
      </div>
    );
  },
);

export default Input;
