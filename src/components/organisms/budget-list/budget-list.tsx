import { useEffect } from "react";
import useBudget from "../../../hooks/useBudget";
import BudgetsTable from "../../molecules/budgets-table/budgets-table";
import style from "./style.module.css";

export default function BudgetList() {
	const { budgetList, getBudgets } = useBudget();

	useEffect(() => {
		const fetch = async () => {
			await getBudgets();
		};
		fetch();
	}, []);

	return (
		<div className={style.container}>
			<BudgetsTable budgets={budgetList} />
		</div>
	);
}