import { BudgetProduct, Product } from "../../../types/types";
import TableHeader from "../../atoms/table-header/table-header";
import TableRow from "../../atoms/table-row/table-row";
import style from "./style.module.css";

type Props = {
	products: Product[] | BudgetProduct[];
    table: string[][];
	onClick: (code: string) => void;
};

export default function ProductTable({ products, table, onClick }: Props) {
	return (
		<table className={style.table}>
			<TableHeader params={table[0]} />
			<tbody>
				{products.map((product) => (
					<TableRow 
						content={table[1]} 
						onClick={() => onClick(product.code)} 
						key={product.code} 
					/>
				))}
			</tbody>
		</table>
	);
}