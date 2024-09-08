import { useBudgets } from "../../../core";
import { BudgetForm } from "../../components/molecules";
import { BudgetEditor } from "../../components/organisms";
import { AppLayout, ContainerLayout } from "../../layout";

export function Budget() {
	const { products, budget, addProduct, subtractProduct, getAmount, setClientAndDiscount, createBudget } = useBudgets();

  return (
    <AppLayout>
        <ContainerLayout title="Presupuesto" scrollable={false}>
            <BudgetForm setClientAndDiscount={setClientAndDiscount} />
            <BudgetEditor
              products={products} 
              budget={budget} 
              addProduct={addProduct} 
              subtractProduct={subtractProduct}
              getAmount={getAmount}
              createBudget={createBudget}
            />
        </ContainerLayout>
    </AppLayout>
  );
}