import { AppLayout, ContainerLayout } from "../../layout";
import FAButton from "../../components/fa-button/fa-button";
import BudgetForm from "../../components/budget-form/budget-form";
import BudgetEditor from "../../components/budget-editor/budget-editor";
import useViewModel from "./viewmodel/useViewModel";
import { FaPlus } from "react-icons/fa";

export default function BudgetRoute() {
	
  const { loading, products, budget, setClientAndDiscount, createBudget, addProduct, subtractProduct } = useViewModel();

  return (
    <AppLayout>
        <ContainerLayout title="Presupuesto" scrollable={false}>
            {loading && <p>Cargando...</p>}
            {!loading && products && 
            <>
              <BudgetForm onSubmit={setClientAndDiscount} />
              <BudgetEditor
                products={products} 
                budget={budget} 
                addProduct={addProduct} 
                subtractProduct={subtractProduct}
              />
              </>
            }
			      <FAButton content={<FaPlus />} onClick={createBudget}/>		  
        </ContainerLayout>
    </AppLayout>
  );
}