import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
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
type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
declare const Checkbox: ({ className, label, icon: Icon, checkedIcon: CheckedIcon, labelPlacement, ...props }: CheckboxProps, ref: PolymorphicRef<"input">) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Checkbox;
