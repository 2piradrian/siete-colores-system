import { budgetProducts } from "../../../data-structures/tables";
import { BudgetProduct } from "../../../types/types";
import TableHeader from "../../atoms/table-header/table-header";
import TableRow from "../../atoms/table-row/table-row";
import style from "./style.module.css";

type Props = {
	products: BudgetProduct[];
};

function BudgetTable({ products }: Props) {
	return (
		<table className={style.productTable}>
			<TableHeader params={budgetProducts[0]}/>
			<tbody>
				{products.map((product) => (
					<TableRow 
						content={budgetProducts[1].map((param) => product[param as keyof BudgetProduct])}
						key={product.code}
						onClick={() => {}}
					/>
				))}
			</tbody>
		</table>
	);
}

export default BudgetTable;
