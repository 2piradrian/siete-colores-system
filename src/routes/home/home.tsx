import Statistics from "../../components/organisms/statistics/statistics";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Home() {
    return (
        <AppLayout>
            <ContainerLayout title="Estadísticas" scrollable={false}>
                <Statistics />
            </ContainerLayout>
        </AppLayout>
    );
}