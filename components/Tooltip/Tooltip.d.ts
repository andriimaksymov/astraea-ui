import { ReactNode } from '../../../node_modules/react';
export type TooltipProps = {
    /**
     * Action that triggers the tooltip. Can be 'hover' or 'click'.
     * @default 'hover'
     */
    action?: "hover" | "click";
    /**
     * If true, adds an arrow to the tooltip.
     * default 'false'
     */
    arrow?: boolean;
    /**
     * Tooltip reference element.
     */
    children?: ReactNode;
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * Tooltip content. Zero-length content string, undefined, null and false are never displayed.
     */
    content?: ReactNode;
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * default 0
     */
    delay?: number;
    /**
     * If true, the component is shown.
     * default 'false'
     */
    open?: boolean;
    /**
     * Tooltip placement.
     * default 'bottom'
     */
    placement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
    /**
     * Theme style of the tooltip.
     * default 'dark'
     */
    theme?: "dark" | "light";
    /**
     * The width of tooltip.
     * default 'auto'
     */
    width?: number | "auto";
};
/**
 * A component that displays a tooltip when triggered by user action.
 * @param {TooltipProps} props - The props for the Tooltip component.
 * @returns {JSX.Element} - The rendered Tooltip component.
 */
declare const Tooltip: ({ action, arrow, content, className, children, delay, open, placement, theme, width, }: TooltipProps) => JSX.Element;
export default Tooltip;
