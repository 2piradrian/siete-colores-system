import InputLabel from "../input-label/input-label";
import MainButton from "../main-button/main-button";
import style from "./style.module.css";

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function BudgetForm({ onSubmit }: Props) {
    
    return (
        <form onSubmit={onSubmit} className={style.form}>
			<InputLabel id="client" type="text" label="Cliente" placeholder="Cotillon" required/>
            <InputLabel id="discount" type="number" label="Descuento" placeholder="10" required={false}/>
			<MainButton text="Cargar datos" type="submit" />
		</form>
    )
}