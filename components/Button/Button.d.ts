import { ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
export declare type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
export type ButtonProps<T extends ElementType> = {
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * The color of the component.
     * @default 'inherit'
     */
    color?: "inherit" | "primary" | "secondary";
    /**
     * The component to use.
     */
    component?: T;
    /**
     * If 'true' the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * The icon that will be placed after content.
     */
    endIcon?: ElementType;
    /**
     * The component will be stretched by all content.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: "small" | "medium" | "large";
    /**
     * The icon that will be placed before content.
     */
    startIcon?: ElementType;
    /**
     * The variant of the component.
     * @default 'contained'
     */
    variant?: "contained" | "outlined" | "text";
};
declare const Button: <T extends ElementType = "button">({ children, className, component, color, disabled, endIcon: EndIcon, size, startIcon: StartIcon, variant, fullWidth, ...rest }: ButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>, ref: PolymorphicRef<T>) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Button;
