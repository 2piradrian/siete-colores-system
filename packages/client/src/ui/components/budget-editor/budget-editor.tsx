import { priceFormatter } from "../../../core";
import { BudgetEntity, BudgetProductEntity, budgetProducts, ProductEntity, reducedProducts } from "../../../domain";
import Table from "../table/table";
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
				<p>Sub-Total: {priceFormatter(budget.subtotal)}</p>
				<p>Total: {priceFormatter(budget.total)}</p>
			</div>
			<div className={style.tablesContainer}>
				<div className={`${style.tableContainer} table`}>
					<Table 
						content={products.map((product) => ({
							...product,
							price: priceFormatter(product.price),
							offertPrice: product.offertPrice ? priceFormatter(product.offertPrice) : undefined,
						}))} 
						table={reducedProducts} 
						onClick={(product: ProductEntity) => addProduct(product.code)} 
					/>
				</div>
				<div className={`${style.tableContainer} table`}>
					<Table 
						content={budget.products.map((product) => ({
							...product,
							price: priceFormatter(product.price),
							quantityPrice: priceFormatter(product.quantityPrice),
						}))} 
						table={budgetProducts} 
						onClick={(product: BudgetProductEntity) => subtractProduct(product.code)} 
					/>
				</div>
			</div>
		</section>
	);
}