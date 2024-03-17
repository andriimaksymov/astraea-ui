import { ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
export type DividerProps = {
    /**
     * Override or extend styles applied to the component.
     */
    className?: string;
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * The component orientation.
     * @default 'horizontal'
     */
    orientation?: "horizontal" | "vertical";
} & ComponentPropsWithoutRef<"div">;
/**
 * Divider component for creating horizontal or vertical dividing lines.
 * @param {DividerProps} props The props for the Divider component.
 * @returns {JSX.Element} The Divider component.
 */
declare const Divider: ({ className, orientation, children, ...rest }: DividerProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Divider;
