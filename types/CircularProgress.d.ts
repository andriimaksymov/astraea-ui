export type CircularProgressProps = {
  /**
   * The color of the progress.
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "inherit";
  /**
   * Override or extend styles applied to the component.
   */
  className?: string;
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default 40
   */
  size?: string | number;
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness?: number;
  /**
   * The value of the progress indicator for the determinate variant. Value between 0 and 100.
   * @default 0
   */
  value?: number;
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: "determinate" | "indeterminate";
};
