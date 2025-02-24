import InputLabel from "../input-label/input-label";
import MainButton from "../main-button/main-button";
import style from "./style.module.css";

type Props = {
	percent: number;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function PercentCalculator({ percent, onSubmit }: Props) {

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={onSubmit}>
				<InputLabel label="Precio Anterior" type="number" placeholder="1500" id="oldPrice" required />
				<InputLabel label="Precio Nuevo" type="number" placeholder="3000" id="newPrice" required />
				<MainButton text="Calcular" type="submit"/>
			</form>
			<p className={style.total}>Porcentaje: {percent.toFixed(2)}%</p>
		</div>
	);
}