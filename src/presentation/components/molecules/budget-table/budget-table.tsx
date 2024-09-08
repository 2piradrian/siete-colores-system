import { BudgetProduct, budgetProducts } from "../../../../domain";
import { TableHeader, TableRow } from "../../atoms";
import style from "./style.module.css";

type Props = {
	products: BudgetProduct[];
};

export function BudgetTable({ products }: Props) {
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