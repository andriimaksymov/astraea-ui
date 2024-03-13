import { HTMLAttributes, ReactNode } from "react";
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
} & HTMLAttributes<"div">;
/**
 * Divider component for creating horizontal or vertical dividing lines.
 * @param {DividerProps} props The props for the Divider component.
 * @returns {JSX.Element} The Divider component.
 */
declare const Divider: ({ className, orientation, children, }: DividerProps) => import("react/jsx-runtime").JSX.Element;
export default Divider;
