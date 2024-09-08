import { InputLabel, MainButton } from "../../atoms";
import style from "./style.module.css";

type Props = {
    setClientAndDiscount: (client: string, discount: number) => void;
};

export function BudgetForm({ setClientAndDiscount }: Props) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = Object.fromEntries(new FormData(e.currentTarget));

		if (form.client === "" || form.client === undefined) {
			return alert("Debe ingresar un cliente");
		}

        if (form.discount === "" || form.discount === undefined) {
            form.discount = "0";
        }

		setClientAndDiscount(form.client as string, parseFloat(form.discount as string));
		alert("Datos cargados correctamente");
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
			<InputLabel id="client" type="text" label="Cliente" placeholder="Cotillon" required/>
            <InputLabel id="discount" type="number" label="Descuento" placeholder="10" required={false}/>
			<MainButton text="Cargar datos" type="submit" />
		</form>
    )
}