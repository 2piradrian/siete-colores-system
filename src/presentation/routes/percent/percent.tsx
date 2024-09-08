import { PercentCalculator, UpdatePrices } from "../../components/organisms";
import { AppLayout, ContainerLayout } from "../../layout";
import style from "./style.module.css";

export function Percent() {
	return (
		<AppLayout>
			<ContainerLayout title="Porcentajes" scrollable={true}>
				<h2 className={style.title}>Calcular porcentajes</h2>
				<PercentCalculator />
				<hr className={style.hr} />
				<h2 className={style.title}>Actualizar precios</h2>
				<UpdatePrices />
			</ContainerLayout>
		</AppLayout>
	);
}
