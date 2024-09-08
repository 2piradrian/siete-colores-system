import { BudgetList } from "../../components/organisms";
import { AppLayout, ContainerLayout } from "../../layout";

export function Budgets() {
  return (
    <AppLayout>
      <ContainerLayout title="Presupuestos">
        <BudgetList />
      </ContainerLayout>
    </AppLayout>
  );
}