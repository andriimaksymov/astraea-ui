import { ComponentPropsWithoutRef, ElementType, ReactNode } from '../../../node_modules/react';
export type CheckboxProps = {
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * Icon to be used if checkbox is checked.
     */
    checkedIcon?: ElementType;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "top" | "start" | "bottom" | "end";
    /**
     * Icon to be used if checkbox is unchecked.
     */
    icon?: ElementType;
} & ComponentPropsWithoutRef<"input">;
declare const Checkbox: import('../../../node_modules/react').ForwardRefExoticComponent<{
    /**
     * Override or extend the style applied to the component.
     */
    className?: string | undefined;
    /**
     * Icon to be used if checkbox is checked.
     */
    checkedIcon?: ElementType | undefined;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "top" | "bottom" | "end" | "start" | undefined;
    /**
     * Icon to be used if checkbox is unchecked.
     */
    icon?: ElementType | undefined;
} & Omit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Checkbox;
