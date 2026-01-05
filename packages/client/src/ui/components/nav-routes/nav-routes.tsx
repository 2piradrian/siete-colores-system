import { FaBook, FaBookMedical, FaChartPie, FaClipboardList, FaListUl, FaPercent, FaSearch, FaTruck } from "react-icons/fa";
import NavItem from "../nav-item/nav-item";
import style from "./style.module.css";

type Props = {
	state: boolean;
};

export default function NavRoutes({ state }: Props) {
	return (
		<div className={style.routes}>
			<NavItem icon={<FaChartPie />} name="Inicio" route="/" state={state} />
			<NavItem icon={<FaSearch />} name="Productos" route="/products" state={state} />
			<NavItem icon={<FaBookMedical />} name="Presupuestar" route="/budget" state={state} />
			<NavItem icon={<FaBook />} name="Presupuestos" route="/budgets" state={state} />
			<NavItem icon={<FaClipboardList />} name="Categorias" route="/categories" state={state} />
			<NavItem icon={<FaListUl />} name="Sub-Categorias" route="/subcategories" state={state} />
			<NavItem icon={<FaPercent />} name="Porcentaje" route="/percents" state={state} />
			<NavItem icon={<FaTruck />} name="Envío" route="/shipping" state={state} />
		</div>
	);
}