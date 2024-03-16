import { ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
export type RadioProps = {
    /**
     * Override or extend the style applied to the component
     */
    className?: string;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "start" | "end";
} & ComponentPropsWithoutRef<"input">;
declare const Radio: import('../../../node_modules/react').ForwardRefExoticComponent<{
    /**
     * Override or extend the style applied to the component
     */
    className?: string | undefined;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "end" | "start" | undefined;
} & Omit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Radio;
