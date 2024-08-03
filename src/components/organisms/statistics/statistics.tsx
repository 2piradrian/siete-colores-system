import Stats from "./stats";
import style from "./style.module.css";

export default function Statistics() {
	const getMonth = () => {
		return new Intl.DateTimeFormat("es-ES", { month: "long" }).format(new Date());
	};

	return (
		<section className={style.container}>
			<h3 className={style.h3}>Estadísticas del mes de {getMonth()}</h3>
			<Stats />
		</section>
	);
}