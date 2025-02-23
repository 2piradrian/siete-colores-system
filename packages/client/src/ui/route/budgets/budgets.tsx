import { useNavigate } from "react-router-dom";
import BudgetList from "../../components/budget-list/budget-list";
import { AppLayout, ContainerLayout } from "../../layout";
import useViewModel from "./viewmodel/useViewModel";
import { BudgetEntity } from "../../../domain";

export default function BudgetsRoute() {

  const navigate = useNavigate();
  const { loading, budgets } = useViewModel();

  return (
    <AppLayout>
      <ContainerLayout title="Presupuestos" scrollable={false}>
        {loading && <p>Cargando...</p>}
        {!loading && budgets &&
          <BudgetList 
            budgets={budgets} 
            onRowClick={(budget: BudgetEntity) => {navigate(`/budget-detail/${budget.id}`)}}
          />
        }
      </ContainerLayout>
    </AppLayout>
  );

}