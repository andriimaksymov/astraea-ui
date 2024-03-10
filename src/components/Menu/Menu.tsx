import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Portal from "../Portal";

import { MenuProps } from "../../../types/Menu";

import styles from "./Menu.module.sass";

/**
 * Component for displaying a menu.
 * @param {MenuProps} props - The props for the Menu component.
 * @returns {JSX.Element} - The rendered Menu component.
 */

const Menu = (props: MenuProps) => {
  const {
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left",
    },
    anchorPosition,
    className,
    children,
    elevation,
    fullWidth,
    isOpen,
    transformOrigin = {
      vertical: "top",
      horizontal: "left",
    },

    onClose,
  } = props;

  const classNames = clsx(styles.root, className, {
    [styles[`elevation${elevation}`]]: elevation,
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState({});

  useEffect(() => {
    if (anchorEl && menuRef?.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const { width: menuWidth, height: menuHeight } =
        menuRef.current.getBoundingClientRect();

      const { top, left, width, height } = anchorRect;

      const calculateTopPosition = () => {
        let anchor = 0;
        let transform = 0;
        if (anchorPosition) {
          anchor = anchorPosition.top;
        } else {
          if (anchorOrigin.vertical === "top") {
            anchor += top;
          } else {
            anchor +=
              top + height / (anchorOrigin.vertical === "center" ? 2 : 1);
          }

          if (transformOrigin.vertical === "center") {
            transform += menuHeight / 2;
          } else if (transformOrigin.vertical === "bottom") {
            transform += menuHeight;
          }
        }

        return anchor - transform;
      };

      const calculateLeftPosition = () => {
        let anchor = 0;
        let transform = 0;
        if (anchorPosition) {
          anchor = anchorPosition.top;
        } else {
          if (anchorOrigin.horizontal === "left") {
            anchor += left;
          } else {
            anchor +=
              left + width / (anchorOrigin.horizontal === "center" ? 2 : 1);
          }

          if (transformOrigin.horizontal === "center") {
            transform += menuWidth / 2;
          } else if (transformOrigin.horizontal === "right") {
            transform += menuWidth;
          }
        }

        return anchor - transform;
      };

      setMenuStyle({
        top: calculateTopPosition(),
        left: calculateLeftPosition(),
        ...(fullWidth && { width }),
      });
    }
  }, [menuRef, anchorEl]);

  return isOpen ? (
    <Portal>
      <div className={classNames} ref={menuRef} style={menuStyle}>
        {children}
      </div>
      <div className={styles.backDrop} onClick={onClose} />
    </Portal>
  ) : null;
};

export default Menu;
