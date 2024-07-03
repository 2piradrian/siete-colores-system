import { ReactNode } from "react";
import Title from "../components/atoms/title/title";

type Props = {
    children: ReactNode;
    title: string;
};
export default function ContainerLayout({ children, title }: Props) {
    return (
        <div className="container">
            <Title title={title} />
            <div className="subcontainer">{children}</div>
        </div>
    );
}