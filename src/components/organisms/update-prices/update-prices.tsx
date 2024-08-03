import useProducts from "../../../hooks/useProducts";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

export default function UpdatePrices() {
	const { updatePrices } = useProducts();

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const percentData = Object.fromEntries(new FormData(e.currentTarget));

		if (!percentData.serie || !percentData.percent) {
			return alert("Debes llenar todos los campos");
		}

		const serie = String(percentData.serie);
		const percent = Number(percentData.percent);

		alert(`Se actualizarán los precios de la serie ${serie} en un ${percent}%. Por favor, espera un momento, es una tarea pesada.`);

		updatePrices(serie, percent);
	};

    return (
		<form className={style.form} onSubmit={handleUpdate}>
			<InputLabel label="Serie" type="text" placeholder="A" id="serie" required />
			<InputLabel label="Porcentaje" type="number" placeholder="15" id="percent" required />				
            <MainButton text="Actualizar" type="submit"/>
		</form>
    )
}