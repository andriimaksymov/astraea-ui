import { ComponentPropsWithRef, ElementType } from "react";
import { PolymorphicRef } from "../../../types";
export type IconButtonProps<T extends ElementType> = {
    /**
     * The component to use.
     */
    component?: T;
    /**
     * The color of the component.
     * @default 'inherit'
     */
    color?: "inherit" | "primary" | "secondary";
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * If 'true' the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * The content of the component.
     */
    icon: ElementType;
    /**
     * Override or extend the style applied to the component icon.
     */
    iconClassName?: string;
    /**
     * If 'true' button will be rounded.
     * @default false
     */
    round?: boolean;
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: "small" | "medium" | "large";
};
declare const IconButton: <T extends ElementType = "button">({ component, icon: Icon, round, color, className, iconClassName, disabled, size, ...rest }: IconButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof IconButtonProps<T>>, ref: PolymorphicRef<T>) => import("react/jsx-runtime").JSX.Element;
export default IconButton;
