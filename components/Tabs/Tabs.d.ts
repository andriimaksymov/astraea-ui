import { ReactElement, ReactNode } from "react";
export type TabsTab = {
    /**
     * The label of the tab.
     */
    label: string | ReactElement;
    /**
     * The index of the tab.
     */
    index: number;
    /**
     * The content to be displayed when this tab is selected.
     */
    content: ReactNode;
};
export type TabsProps = {
    /**
     * Additional class name for the root element.
     */
    className?: string;
    /**
     * Array of tabs to be rendered.
     */
    tabs: TabsTab[];
    /**
     * The index of the currently selected tab.
     */
    selectedTab: number;
    /**
     * Callback function to handle tab change.
     */
    onChange: (index: number) => void;
    /**
     * The orientation of the tabs. Can be 'horizontal' or 'vertical'.
     * @default 'horizontal'
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The variant of the tabs. Can be 'underline' or 'outlined'.
     * @default 'underline'
     */
    variant?: "underline" | "outlined";
    /**
     * Whether to lazy load the tab content. If true, content of inactive tabs will not be rendered until they are selected.
     * @default false
     */
    lazyLoad?: boolean;
};
/**
 * A component to display tabs with associated content.
 * @param {TabsProps} props - The props for the Tabs component.
 * @returns {JSX.Element} - The rendered Tabs component.
 */
declare const Tabs: ({ className, tabs, selectedTab, variant, orientation, onChange, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
