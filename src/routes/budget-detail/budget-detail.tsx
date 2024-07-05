import { useEffect, useState } from "react";
import useBudget from "../../hooks/useBudget";
import { Budget } from "../../types/types";
import { useParams } from "react-router-dom";
import PrintTable from "../../components/organisms/print-table/print-table";

export default function BudgetDetail() {
    const { getBudget } = useBudget();
	const [budget, setBudget] = useState<Budget | undefined>({} as Budget);

    const { id } = useParams();

	useEffect(() => {

		const getAsyncBudget = async (id: string) => {
			const budgetFromDatabase = await getBudget(id);
			return budgetFromDatabase;
		};

		if (id) {
			getAsyncBudget(id as string).then((budget) => {
				setBudget(budget);
			});
		}
	}, [id]);

	return budget?.products ? (
		<>
			<head>
				<title key="title">{"Siete Colores | Presupuesto"}</title>
			</head>
			<PrintTable
				budget={budget}
			/>
		</>
	) : (
		<div>Cargando...</div>
	);
}