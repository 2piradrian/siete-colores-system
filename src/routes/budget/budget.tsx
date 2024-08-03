import BudgetForm from "../../components/molecules/budget-form/budget-form";
import BudgetEditor from "../../components/organisms/budget-editor/budget-editor";
import useBudget from "../../hooks/useBudget";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Budget() {
	const { products, budget, addProduct, subtractProduct, getAmount, setClientAndDiscount, createBudget } = useBudget();

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