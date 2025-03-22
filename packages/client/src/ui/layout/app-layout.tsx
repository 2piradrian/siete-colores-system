import { ReactNode } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { Toaster } from "react-hot-toast";

type Props = {
    children: ReactNode;
};

export function AppLayout({ children }: Props) {
    return (
        <div className="app-layout">
            <Sidebar />
            <Toaster />
            <main>{children}</main>
        </div>
    );
}