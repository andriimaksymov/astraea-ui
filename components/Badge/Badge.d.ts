import { ReactNode } from "react";
export interface BadgeOrigin {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
}
export type BadgeProps = {
    /**
     * The anchor of the badge.
     * @default {
     *   vertical: 'top',
     *   horizontal: 'right',
     * }
     */
    anchorOrigin?: BadgeOrigin;
    /**
     * The content to be displayed within the badge.
     */
    badgeContent?: ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /**
     * The badge will be added relative to this node.
     */
    children?: ReactNode;
    /**
     * The color of component.
     * @default 'default'
     */
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    /**
     * The state of badge visibility.
     * If 'true' the badge is invisible.
     * @default false
     */
    invisible?: boolean;
    /**
     * The variant to use.
     * @default 'standard'
     */
    variant?: "dot" | "standard";
};
declare const Badge: ({ anchorOrigin, badgeContent, className, children, color, invisible, variant, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
