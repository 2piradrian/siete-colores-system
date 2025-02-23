import { AppLayout } from "../../layout";
import { useNavigate } from "react-router-dom";
import PrintTable from "../../components/print-table/print-table";
import useViewModel from "./viewmodel/useViewModel";

export default function BudgetDetail() {

	const navigate = useNavigate();
	const { loading, budget, deleteBudget, handlePrint } = useViewModel();

	return (
		<AppLayout>
			{loading && <p>Cargando...</p>}
			{!loading && budget &&
				<PrintTable
					budget={budget} 
					onPrint={handlePrint}
					onDelete={() => {deleteBudget().then(() => navigate("/budgets"))}}
					onCancel={() => navigate("/budgets")}
				/>
			}
		</AppLayout>
	)
}