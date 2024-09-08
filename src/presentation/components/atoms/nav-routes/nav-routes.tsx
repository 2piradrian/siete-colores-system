import { AiFillHome } from "react-icons/ai";
import { FaBook, FaBookMedical, FaClipboardList, FaPercent } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavItem } from "../nav-item/nav-item";
import style from "./style.module.css";

type Props = {
	state: boolean;
};

export function NavRoutes({ state }: Props) {
	return (
		<div className={style.routes}>
			<NavItem icon={<AiFillHome />} name="Inicio" route="/" state={state} />
			<NavItem icon={<FaSearch />} name="Productos" route="/products" state={state} />
			<NavItem icon={<FaBookMedical />} name="Presupuestar" route="/budget" state={state} />
			<NavItem icon={<FaBook />} name="Presupuestos" route="/budgets" state={state} />
			<NavItem icon={<FaClipboardList />} name="Categorias" route="/categories" state={state} />
			<NavItem icon={<FaPercent />} name="Porcentaje" route="/percents" state={state} />
		</div>
	);
}