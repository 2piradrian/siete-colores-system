import { useNavigate } from "react-router-dom";
import { Budget } from "../../../types/types";
import useBudget from "../../../hooks/useBudget";
import BudgetTable from "../../molecules/budget-table/budget-table";
import style from "./style.module.css";
import MainButton from "../../atoms/main-button/main-button";

type Props = {
	budget: Budget | undefined;
};

export default function PrintTable({ budget }: Props) {
	const { deleteBudget } = useBudget();
	const navigate = useNavigate();

	const { id, products, subtotal, discount, total } = budget as Budget;
	const discountUI = discount ? discount : "--";

	const handlePrint = () => {
		window.print();
	};
	const handleDelete = () => {
		deleteBudget(id as string);
		navigate("/budgets");
	};

	return (
		<div className={style.container}>
			<h1>Presupuesto: Siete Colores</h1>
			<h4>Documento no válido como factura</h4>
			<div className={style.tableContainer}>
				<BudgetTable products={products} />
			</div>
			<div className={style.ammount}>
				<div>
					<p>Sub-Total:</p>
					<p>${subtotal}</p>
				</div>
				<div>
					<p>Descuento:</p>
					<p>{discountUI}%</p>
				</div>
				<div>
					<p>Total:</p>
					<p>${total}</p>
				</div>
			</div>
			<div className={style.buttonContainer}>
				<MainButton onClick={handlePrint} text="Imprimir" type="button" />
				<MainButton onClick={handleDelete} text="Borrar" type="button" />
			</div>
		</div>
	);
}