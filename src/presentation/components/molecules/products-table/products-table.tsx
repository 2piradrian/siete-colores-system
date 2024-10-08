import { BudgetProduct, Product } from "../../../../domain";
import { TableHeader, TableRow } from "../../atoms";
import style from "./style.module.css";

type Props = {
	products: Product[] | BudgetProduct[];
	table: string[][];
	onClick: (code: string) => void;
};

export function ProductsTable({ products, onClick, table }: Props) {
	
	return (
		<table className={style.table}>
			<TableHeader params={table[0]} />
			<tbody>
				{products.map((product) => (
					<TableRow 
						content={
							table[1].map((param) => (product as Product & BudgetProduct)[param as keyof (Product & BudgetProduct)])
						} 
						onClick={() => onClick(product.code)} 
						key={product.code} 
					/>
				))}
			</tbody>
		</table>
	);
}