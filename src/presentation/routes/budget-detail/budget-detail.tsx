import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Budget } from "../../../domain";
import { useBudgets } from "../../../core";
import { PrintTable } from "../../components/organisms";

export function BudgetDetail() {
    const { getBudget } = useBudgets();
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