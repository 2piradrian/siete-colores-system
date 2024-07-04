import { BudgetProduct, Product } from "../../../types/types";
import TableHeader from "../../atoms/table-header/table-header";
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
					<tr
						className={style.tableRow}
						key={product.code}
						onClick={() => onClick(product.code)}
					>
						{table[1].map((content, index) => (
							<td className={style.tableCell} key={index}>
								{(product as Product & BudgetProduct)[content as keyof (Product & BudgetProduct)]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}