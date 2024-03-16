import { ComponentPropsWithRef, ElementType, HTMLAttributes, ReactNode } from '../../../node_modules/react';
declare type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
export type CardElevation = 0 | 1 | 2 | 3 | 4 | 5;
export type CardProps = {
    /**
     * Border color of the card.
     */
    borderColor?: string;
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /**
     * The content render inside the card.
     */
    children?: ReactNode;
    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It accepts values between 0 and 5 inclusive.
     * @default 1
     */
    elevation?: CardElevation;
    /**
     * If 'true' the card has 1px border.
     * @default false
     */
    hasBorder?: boolean;
    /**
     * Padding size for the card.
     * @default "medium"
     */
    padding?: "none" | "small" | "medium" | "large";
} & HTMLAttributes<HTMLDivElement>;
declare const Card: ({ hasBorder, borderColor, className, children, padding, elevation, ...rest }: CardProps, ref: PolymorphicRef<"div">) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Card;
