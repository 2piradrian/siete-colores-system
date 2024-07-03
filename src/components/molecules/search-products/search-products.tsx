import InputLabel from "../../atoms/input-label/input-label";
import style from "./style.module.css";

type Props = {
	setSearch: (search: string) => void;
};

export default function SearchProducts({ setSearch }: Props) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const searchData = Object.fromEntries(new FormData(e.currentTarget));
		setSearch(searchData.search as string);
	};

	return (
		<form onSubmit={handleSubmit} className={style.container}>
			<InputLabel id="search" label="Buscar producto" placeholder="Tigre" type="text" />
		</form>
	);
}