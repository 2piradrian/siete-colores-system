import { ReactNode } from "react";
import { Sidebar } from "../components/molecules";

type Props = {
    children: ReactNode;
};

export function AppLayout({ children }: Props) {
    return (
        <div className="app-layout">
            <Sidebar />
            <main>{children}</main>
        </div>
    );
}