import Statistics from "../../components/organisms/statistics/statistics";
import AppLayout from "../../layout/app-layout";

export default function Home() {
    return (
        <AppLayout>
            <div className="container">
                <Statistics />
            </div>
        </AppLayout>
    );
}