import { ReactNode } from '../../../node_modules/react';
export type PortalProps = {
    children?: ReactNode;
    className?: string;
    node?: Element;
};
declare const Portal: ({ children, className, node }: PortalProps) => import('../../../node_modules/react').ReactPortal;
export default Portal;
