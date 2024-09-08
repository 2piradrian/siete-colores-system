import { useNavigate } from "react-router-dom";
import { allBudgets, Budget } from "../../../../domain";
import { TableHeader, TableRow } from "../../atoms";
import style from "./style.module.css";

type Props = {
	budgets: Budget[];
};

export function BudgetsTable({ budgets }: Props) {
	const navigate = useNavigate();

	return (
		<table className={style.table}>
			<TableHeader params={allBudgets[0]} />
			<tbody>
				{budgets.map((budget) => {
					const date = new Date(budget.date);
					const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
					return (
						<TableRow 
						content={[budget.client, formattedDate, `$${budget.total}`]} 
						onClick={() => {navigate(`/budget-detail/${budget.id}`)}} 
						key={budget.id} 
					/>
					);
				})}
			</tbody>
		</table>
	);
}