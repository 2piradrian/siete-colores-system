import { BudgetProduct, Product } from "../../../types/types";
import TableHeader from "../../atoms/table-header/table-header";
import TableRow from "../../atoms/table-row/table-row";
import style from "./style.module.css";

type Props = {
	products: Product[] | BudgetProduct[];
	onClick: (code: string) => void;
};

export default function ProductsTable({ products, onClick }: Props) {
	const table = [["Codigo", "Nombre", "Categoria", "Precio"], ["code", "name", "category", "price"]];
	
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