import { ReactNode } from "react";
import Sidebar from "../components/sidebar/sidebar";

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