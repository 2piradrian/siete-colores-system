import { useNavigate } from "react-router-dom";
import { BudgetEntity } from "../../../domain";
import { AppLayout, ContainerLayout } from "../../layout";
import { MdDelete } from "react-icons/md";
import FAButton from "../../components/fa-button/fa-button";
import BudgetList from "../../components/budget-list/budget-list";
import ModalConfirm from "../../components/modal-confirm/modal-confirm";
import useViewModel from "./viewmodel/useViewModel";

export default function BudgetsRoute() {

  const navigate = useNavigate();
  const { loading, budgets, deleteOlder, setShowModal, showModal } = useViewModel();

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
        {showModal && (
          <ModalConfirm
            message="¿Estás seguro de que querés borrar los presupuestos viejos?"
            onConfirm={deleteOlder}
            onCancel={()=>{setShowModal(false)}}
          />
        )}
        <FAButton content={<MdDelete />} onClick={() => {setShowModal(true)}} />
      </ContainerLayout>
    </AppLayout>
  );

}