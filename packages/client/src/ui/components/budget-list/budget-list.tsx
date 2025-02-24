import { dateFormatter, priceFormatter } from "../../../core";
import { allBudgets, BudgetEntity } from "../../../domain";
import Table from "../table/table";
import style from "./style.module.css";

type Props = {
	budgets: BudgetEntity[];
	onRowClick: (budget: BudgetEntity) => void;
}

export default function BudgetList({ budgets, onRowClick }: Props) {
	return (
		<div className={`${style.container} table`}>
			<Table
				content={budgets.map((budget) => ({
					...budget,
					total: priceFormatter(budget.total),
					date: dateFormatter(budget.date)
				}))}
				onClick={onRowClick}
				table={allBudgets}
			/>
		</div>
	);
}