import { BudgetEntity, budgetProducts, ProductEntity, reducedProducts } from "../../../domain";
import { Table } from "../table/table";
import style from "./style.module.css";

type Props = {
	budget: BudgetEntity;
	products: ProductEntity[];
	addProduct: (code: string) => void;
	subtractProduct: (code: string) => void;
};

export default function BudgetEditor({ products, budget, addProduct, subtractProduct }: Props) {

	return (
		<section className={style.container}>
			<div className={style.amount}>
				<p>Sub-Total: $ {budget.subtotal}</p>
				<p>Total: $ {budget.total}</p>
			</div>
			<div className={style.tablesContainer}>
				<div className={`${style.tableContainer} table`}>
					<Table 
						content={products} 
						table={reducedProducts} 
						onClick={(code: string) => addProduct(code)} 
					/>
				</div>
				<div className={`${style.tableContainer} table`}>
					<Table 
						content={budget.products} 
						table={budgetProducts} 
						onClick={(code: string) => subtractProduct(code)} 
					/>
				</div>
			</div>
		</section>
	);
}