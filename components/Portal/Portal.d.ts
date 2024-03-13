import { ReactNode } from "react";
export type PortalProps = {
    children?: ReactNode;
    className?: string;
    node?: Element;
};
declare const Portal: ({ children, className, node }: PortalProps) => import("react").ReactPortal;
export default Portal;
