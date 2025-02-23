import InputLabel from "../input-label/input-label";
import MainButton from "../main-button/main-button";
import style from "./style.module.css";

type Props = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function UpdatePrices({ onSubmit }: Props) {

    return (
		<form className={style.form} onSubmit={onSubmit}>
			<InputLabel label="Serie" type="text" placeholder="A" id="serie" required />
			<InputLabel label="Porcentaje" type="number" placeholder="15" id="percent" required />				
            <MainButton text="Actualizar" type="submit"/>
		</form>
    )
}