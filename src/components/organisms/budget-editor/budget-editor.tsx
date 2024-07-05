import { useEffect, useState } from "react";
import { budgetProducts, reducedProducts } from "../../../data-structures/tables";
import ProductsTable from "../../molecules/products-table/products-table";
import { Budget, Product } from "../../../types/types";
import FAButton from "../../atoms/fa-button/fa-button";
import style from "./style.module.css";

type Props = {
	products: Product[];
	budget: Budget;
	addProduct: (code: string) => void;
	subtractProduct: (code: string) => void;
	getAmount: () => { subtotal: number; total: number };
	createBudget: () => void;
};

export default function BudgetEditor({ products, budget, addProduct, subtractProduct, getAmount, createBudget }: Props) {

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
				<div className={style.tableContainer}>
					<ProductsTable products={products} table={reducedProducts} onClick={(code: string) => addProduct(code)} />
				</div>
				<div className={style.tableContainer}>
					<ProductsTable products={budget.products} table={budgetProducts} onClick={(code: string) => subtractProduct(code)} />
				</div>
			</div>
			<FAButton content="+" onClick={createBudget}/>		
		</section>
	);
}