import { useEffect, useState } from "react";
import { FAButton } from "../../atoms";
import { ProductsTable } from "../../molecules";
import { Budget, budgetProducts, Product, reducedProducts } from "../../../../domain";
import style from "./style.module.css";

type Props = {
	products: Product[];
	budget: Budget;
	addProduct: (code: string) => void;
	subtractProduct: (code: string) => void;
	getAmount: () => { subtotal: number; total: number };
	createBudget: () => void;
};

export function BudgetEditor({ products, budget, addProduct, subtractProduct, getAmount, createBudget }: Props) {

	const [ammount, setAmmount] = useState({subtotal: 0, total: 0});

	useEffect(() => {
		setAmmount(getAmount());
	}, [budget.products, budget.discount]);

	return (
		<section className={style.container}>
			<div className={style.amount}>
				<p>Sub-Total: $ {ammount.subtotal}</p>
				<p>Total: $ {ammount.total}</p>
			</div>
			<div className={style.tablesContainer}>
				<div className={`${style.tableContainer} table`}>
					<ProductsTable products={products} table={reducedProducts} onClick={(code: string) => addProduct(code)} />
				</div>
				<div className={`${style.tableContainer} table`}>
					<ProductsTable products={budget.products} table={budgetProducts} onClick={(code: string) => subtractProduct(code)} />
				</div>
			</div>
			<FAButton content="+" onClick={createBudget}/>		
		</section>
	);
}