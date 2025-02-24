import InputLabel from "../input-label/input-label";
import style from "./style.module.css";

type Props = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchProducts({ onSubmit }: Props) {

	return (
		<form onSubmit={onSubmit} className={style.container}>
			<InputLabel id="search" placeholder="Buscar producto..." type="text" required={false} />
		</form>
	);
}