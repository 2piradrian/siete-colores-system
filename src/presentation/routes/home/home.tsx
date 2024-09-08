import { Statistics } from "../../components/organisms";
import { AppLayout, ContainerLayout } from "../../layout";

export function Home() {
    return (
        <AppLayout>
            <ContainerLayout title="Estadísticas" scrollable={false}>
                <Statistics />
            </ContainerLayout>
        </AppLayout>
    );
}