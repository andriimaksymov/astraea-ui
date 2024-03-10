export type ProgressProps = {
  /**
   * If 'true' it animate the stripes right to left. Work only if 'striped' is true.
   * @default false
   */
  animated?: boolean;
  /**
   * The color of progress bar.
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /**
   * Override or extend the styles applied to the progress wrapper.
   */
  className?: string;
  /**
   * Override or extend the styles applied to the progress bar.
   */
  classNameBar?: string;
  /**
   * The label inside the progress.
   */
  label?: string;
  /**
   * Current value of progress.
   * @default 0
   */
  progress: number;
  /**
   * If 'true' the progress have a gradient to create a striped effect.
   * @default false
   */
  striped?: boolean;
};
