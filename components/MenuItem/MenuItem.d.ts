import { ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
import { ButtonProps } from "../Button";
type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
export type MenuItemProps<T extends ElementType> = {
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * The component to use.
     */
    component?: T;
    /**
     * If 'true' the component has active styles.
     * @default false
     */
    isActive?: boolean;
};
declare const MenuItem: <T extends ElementType = "div">({ children, component, className, isActive, ...rest }: MenuItemProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>, ref: PolymorphicRef<T>) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default MenuItem;
