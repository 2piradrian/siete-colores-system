import { AppLayout, ContainerLayout } from "../../layout";
import PercentCalculator from "../../components/percent-calculator/percent-calculator";
import UpdatePrices from "../../components/update-prices/update-prices";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export function PercentRoute() {

	const { percent, calculatePercent, updatePrices } = useViewModel();

	return (
		<AppLayout>
			<ContainerLayout title="Porcentajes" scrollable={true}>
				<h2 className={style.title}>Calcular porcentajes</h2>
				<PercentCalculator
					percent={percent}
					onSubmit={calculatePercent}
				/>
				<hr className={style.hr} />
				<h2 className={style.title}>Actualizar precios</h2>
				<UpdatePrices
					onSubmit={updatePrices}
				/>
			</ContainerLayout>
		</AppLayout>
	);
}
