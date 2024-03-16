import { ChangeEvent, ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
export type SwitchSize = "small" | "medium" | "large";
export type SwitchLabelPlacement = "top" | "start" | "bottom" | "end";
export type SwitchProps = {
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * If 'true', the component is checked.
     * @default false
     */
    checked?: boolean;
    /**
     * If 'true', the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label?: ReactNode;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: SwitchLabelPlacement;
    /**
     * The size of the component.
     * @default 'medium;
     */
    size?: SwitchSize;
    /**
     * Callback fired when the state is changed.
     *
     * function(event: React.ChangeEvent<HTMLInputElement>) => void
     * event: The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean).
     * @param e
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
declare const Switch: ({ checked, className, disabled, label, labelPlacement, size, onChange, ...rest }: SwitchProps, ref: PolymorphicRef<"div">) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Switch;
