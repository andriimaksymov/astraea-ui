import { ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
export type ChipProps = {
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * The content render inside the chip.
     */
    children?: ReactNode;
    /**
     * The color of component.
     * @default 'default'
     */
    color?: "default" | "primary" | "secondary";
    /**
     * Override the default delete icon element. Shown only if 'onDelete' is set.
     */
    deleteIcon?: ElementType;
    /**
     * If 'true' the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback fired when the delete icon is clicked.
     * If set, the delete icon will be shown.
     */
    onDelete?: () => void;
    /**
     * Callback fired when the chip is clicked.
     * If set, cursor will be 'pointer'.
     */
    onClick?: () => void;
    /**
     * If 'true' chip is rounded.
     * @default false
     */
    round?: boolean;
    /**
     * The variant to use.
     */
    variant?: "outlined" | "contained";
};
declare const Chip: ({ className, color, deleteIcon, disabled, round, variant, children, onDelete, onClick, ...rest }: ChipProps, ref: PolymorphicRef<"div">) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default Chip;
