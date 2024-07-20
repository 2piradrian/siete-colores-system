import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    setClientAndDiscount: (client: string, discount: number) => void;
};

export default function BudgetForm({ setClientAndDiscount }: Props) {
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
        <form onSubmit={handleSubmit}>
			<div className={style.preform}>
				<InputLabel id="client" type="text" label="Cliente" placeholder="Cotillon" required/>
                <InputLabel id="discount" type="number" label="Descuento" placeholder="10" required={false}/>
				<MainButton text="Cargar datos" type="submit" />
			</div>
		</form>
    )
}