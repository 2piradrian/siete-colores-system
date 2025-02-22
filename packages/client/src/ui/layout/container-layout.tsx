import { ReactNode } from "react";
import Title from "../components/title/title";

type Props = {
    children: ReactNode;
    title: string;
    scrollable?: boolean
};
export function ContainerLayout({ children, title, scrollable }: Props) {
    return (
        <div className="container" style={{"height": scrollable ? "auto" : "100vh"}}>
            <Title title={title} />
            <div className="subcontainer">{children}</div>
        </div>
    );
}