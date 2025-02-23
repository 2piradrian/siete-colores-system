import BudgetList from "../../components/budget-list/budget-list";
import { AppLayout, ContainerLayout } from "../../layout";

export default function BudgetsRoute() {
  return (
    <AppLayout>
      <ContainerLayout title="Presupuestos">
        <BudgetList 
          budgets={[]} 
          onRowClick={() => {}}
        />
      </ContainerLayout>
    </AppLayout>
  );
}