import { NavLink } from "react-router-dom";
import style from "./style.module.css";

type Props = {
	icon: JSX.Element;
	state: boolean;
	name: string;
	route: string;
};

export function NavItem({ state, icon, name, route }: Props) {
	return (
		<NavLink
            to={route}
            className={({ isActive }) => 
                isActive ? `${style.active} ${style.route}` : `${style.inactive} ${style.route}`
            }>
            <div className={style.icon}>{icon}</div>
            <p style={state ? { opacity: '1', width: 'auto' } : { opacity: '0', width: '0px' }}>
                {name}
            </p>
        </NavLink>
	);
}