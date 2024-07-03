import Title from "../../components/atoms/title/title";
import AppLayout from "../../layout/app-layout";

export default function Products() {
    return (
        <AppLayout>
            <div className="container">
                <Title title="Productos" />
                <div className="subcontainer">
                    <p>Productos</p>
                </div>
            </div>
        </AppLayout>
    );
}