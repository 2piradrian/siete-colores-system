import { BudgetsTable } from "../../molecules";
import { useBudgets } from "../../../../core";
import style from "./style.module.css";

export function BudgetList() {
	const { budgetList } = useBudgets();

	return (
		<div className={`${style.container} table`}>
			<BudgetsTable budgets={budgetList} />
		</div>
	);
}