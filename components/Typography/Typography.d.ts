import { ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
import { PolymorphicRef } from "../../../types/utils";
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
export type TypographyWeight = "normal" | "medium" | "semiBold" | "bold";
/**
 * Props for Typography component.
 * @template T - The type of element to render.
 */
export type TypographyProps<T extends ElementType> = {
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /**
     * The component to use.
     */
    component?: T;
    /**
     * The variant of typography.
     * @default 'body1'
     */
    variant?: TypographyVariant;
    /**
     * Available weights for component.
     */
    weight?: TypographyWeight;
};
declare const Typography: <T extends ElementType>({ component, children, className, variant, weight, ...rest }: TypographyProps<T> & Omit<ComponentPropsWithRef<T>, keyof TypographyProps<T>>, ref: PolymorphicRef<T>) => JSX.Element;
export default Typography;
