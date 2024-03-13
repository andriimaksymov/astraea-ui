import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type StackProps = {
    /**
     * Defines the align-items style property. It is applied for all screen sizes.
     */
    align?: "start" | "center" | "end" | "stretch";
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * Defines the flex-direction style property. It is applied for all screen sizes.
     * @default 'row'
     */
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    /**
     * Defines the justify-content style property. It is applied for all screen sizes.
     */
    justify?: "start" | "center" | "end" | "between" | "around";
    /**
     * Defines the space between immediate children.
     */
    spacing?: 1 | 2 | 3 | 4 | string;
    /**
     * Defines the flex-wrap style property. It's applied for all screen sizes.
     */
    wrap?: "nowrap" | "wrap-reverse" | "wrap";
} & HTMLAttributes<HTMLDivElement>;
/**
 * Stack component for arranging and spacing its children.
 * @param {StackProps} props - The props for the Stack component.
 * @returns {JSX.Element} - The rendered Stack component.
 */
declare const Stack: ({ align, justify, direction, spacing, wrap, className, children, ...rest }: StackProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Stack;
