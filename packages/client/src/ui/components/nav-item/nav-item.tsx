import { NavLink } from "react-router-dom";
import style from "./style.module.css";

type Props = {
	icon: React.ReactNode;
	state: boolean;
	name: string;
	route: string;
};

export default function NavItem({ state, icon, name, route }: Props) {
	return (
		<NavLink
            to={route}
            className={
                ({ isActive }) => 
                    isActive ? `${style.active} ${style.route}` : `${style.inactive} ${style.route}`
                }
            >
            <div className={style.icon}>{icon}</div>
            <p className={state ? `${style.open}` : `${style.close}`}>
                {name}
            </p>
        </NavLink>
	);
}