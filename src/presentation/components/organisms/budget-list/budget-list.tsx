import { useEffect } from "react";
import { BudgetsTable } from "../../molecules";
import { useBudgets } from "../../../../core";
import style from "./style.module.css";

export function BudgetList() {
	const { budgetList, getBudgets } = useBudgets();

	useEffect(() => {
		const fetch = async () => {
			await getBudgets();
		};
		fetch();
	}, []);

	return (
		<div className={`${style.container} table`}>
			<BudgetsTable budgets={budgetList} />
		</div>
	);
}