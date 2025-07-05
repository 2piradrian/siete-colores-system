import { AppLayout, ContainerLayout } from "../../layout";
import PercentCalculator from "../../components/percent-calculator/percent-calculator";
import UpdatePrices from "../../components/update-prices/update-prices";
import useViewModel from "./viewmodel/useViewModel";
import ModalConfirm from "../../components/modal-confirm/modal-confirm";
import style from "./style.module.css";

export function PercentRoute() {

	const { percent, calculatePercent, updatePrices, handleFormSubmit, setShowModal, showModal } = useViewModel();

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
					onSubmit={handleFormSubmit}
				/>
				{showModal && (
					<ModalConfirm
						message="¿Estás seguro de que querés actualizar los precios?"
						onConfirm={updatePrices}
						onCancel={()=>{setShowModal(false)}}
					/>
				)}
			</ContainerLayout>
		</AppLayout>
	);
}
