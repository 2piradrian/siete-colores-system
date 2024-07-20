import { useState } from "react";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

export default function PercentCalculator() {
	const [percent, setPercent] = useState<number>(0);

	const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const percentData = Object.fromEntries(new FormData(e.currentTarget));

		if (!percentData.oldPrice || !percentData.newPrice) {
			return alert("Debes llenar todos los campos");
		}

		const oldPrice = Number(percentData.oldPrice);
		const newPrice = Number(percentData.newPrice);

		const percent = ((newPrice - oldPrice) / oldPrice) * 100;

		const roundedPercent = parseFloat(percent.toFixed(2));

		setPercent(roundedPercent);
	};

	return (
		<div className="container" style={{"justifyContent": "center"}}>
			<form className={style.form} onSubmit={handleCalculate}>
				<InputLabel label="Precio Anterior" type="number" placeholder="1500.00" id="oldPrice" required />
				<InputLabel label="Precio Nuevo" type="number" placeholder="3000.50" id="newPrice" required />
				<MainButton text="Calcular" type="submit"/>
			</form>
			<p className={style.total}>Porcentaje: {percent.toFixed(2)}%</p>
		</div>
	);
}