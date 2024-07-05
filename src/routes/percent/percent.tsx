import PercentCalculator from "../../components/organisms/percent-calculator/percent-calculator";
import UpdatePrices from "../../components/organisms/update-prices/update-prices";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";
import style from "./style.module.css";

export default function Percent() {
	return (
		<AppLayout>
			<ContainerLayout title="Porcentajes">
				<h2 className={style.title}>Calcular porcentajes</h2>
				<PercentCalculator />
				<hr className={style.hr} />
				<h2 className={style.title}>Actualizar precios</h2>
				<UpdatePrices />
			</ContainerLayout>
		</AppLayout>
	);
}
