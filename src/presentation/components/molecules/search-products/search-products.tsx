import { InputLabel } from "../../atoms";
import style from "./style.module.css";

type Props = {
	setSearch: (search: string) => void;
};

export function SearchProducts({ setSearch }: Props) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const searchData = Object.fromEntries(new FormData(e.currentTarget));
		setSearch(searchData.search as string);
	};

	return (
		<form onSubmit={handleSubmit} className={style.container}>
			<InputLabel id="search" placeholder="Buscar producto..." type="text" required={false} />
		</form>
	);
}