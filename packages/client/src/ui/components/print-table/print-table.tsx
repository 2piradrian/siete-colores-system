import { BudgetEntity, budgetProducts } from "../../../domain";
import { priceFormatter } from "../../../core";
import MainButton from "../main-button/main-button";
import Table from "../table/table";
import style from "./style.module.css";
import DestructiveButton from "../destructive-button/destructive-button";

type Props = {
	budget: BudgetEntity;
	onPrint: () => void;
	onDelete: () => void;
	onCancel: () => void;
};

export default function PrintTable({ budget, onPrint, onDelete, onCancel }: Props) {

	return (
		<div className={style.container}>
			<h1>Presupuesto: Siete Colores</h1>
			<span>Documento no válido como factura</span>
			<div className={style.tableContainer}>
				<Table 
					content={budget.products.map((product) => ({
						...product,
						price: priceFormatter(product.price),
						quantityPrice: priceFormatter(product.price * product.quantity)
					}))}  
					table={budgetProducts}
					onClick={() => {}}	
				/>
			</div>
			<div className={style.ammount}>
				<div>
					<p>Sub-Total:</p>
					<p>{priceFormatter(budget.subtotal)}</p>
				</div>
				<div>
					<p>Descuento:</p>
					<p>{budget.discount ? budget.discount : "--"}%</p>
				</div>
				<div>
					<p>Total:</p>
					<p>{priceFormatter(budget.total)}</p>
				</div>
			</div>
			<div className={style.buttonContainer}>
				<MainButton onClick={onPrint} text="Imprimir" type="button" />
				<MainButton onClick={onCancel} text="Cancelar" type="button" />
				<DestructiveButton onClick={onDelete} text="Borrar" type="button" />
			</div>
		</div>
	);
}