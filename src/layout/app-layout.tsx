import { ReactNode } from "react";
import Sidebar from "../components/molecules/sidebar/sidebar";

type Props = {
    children: ReactNode;
};

export default function AppLayout({ children }: Props) {
    return (
        <div className="app-layout">
            <Sidebar />
            <main>{children}</main>
        </div>
    );
}