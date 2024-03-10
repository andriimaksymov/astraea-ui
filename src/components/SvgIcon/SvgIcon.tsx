import clsx from "clsx";

import { SvgIconProps } from '../../../types';

import styles from "./SvgIcon.module.sass";

/**
 * SvgIcon component for displaying SVG icons with customizable color and size.
 * @param {SvgIconProps} props - The props for the SvgIcon component.
 * @returns {JSX.Element} - The rendered SvgIcon component.
 */

const SvgIcon = ({
  className,
  color = "inherit",
  fontSize = "medium",
  icon: Icon,
  ...rest
}: SvgIconProps) => {
  const classNames = clsx(
    styles.root,
    className,
    styles[`${fontSize}FontSize`],
    styles[`${color}Color`],
  );

  return <Icon className={classNames} {...rest} />;
};

export default SvgIcon;
