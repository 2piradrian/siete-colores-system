import { useNavigate } from "react-router-dom";
import { Budget } from "../../../types/types";
import style from "./style.module.css";
import TableHeader from "../../atoms/table-header/table-header";
import { allBudgets } from "../../../data-structures/tables";
import TableRow from "../../atoms/table-row/table-row";

type Props = {
	budgets: Budget[];
};

export default function BudgetsTable({ budgets }: Props) {
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