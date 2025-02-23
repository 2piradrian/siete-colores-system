import { allBudgets, BudgetEntity } from "../../../domain";
import Table from "../table/table";
import style from "./style.module.css";

type Props = {
	budgets: BudgetEntity[];
	onRowClick: (id: string) => void;
}

export default function BudgetList({ budgets, onRowClick }: Props) {
	return (
		<div className={`${style.container} table`}>
			<Table
				content={budgets}
				onClick={onRowClick}
				table={allBudgets}
			/>
		</div>
	);
}