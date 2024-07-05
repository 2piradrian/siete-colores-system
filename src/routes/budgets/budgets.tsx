import BudgetList from "../../components/organisms/budget-list/budget-list";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Budgets() {
  return (
    <AppLayout>
      <ContainerLayout title="Presupuestos">
        <BudgetList />
      </ContainerLayout>
    </AppLayout>
  );
}