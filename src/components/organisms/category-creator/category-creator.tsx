import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    createCategory: (category: string) => void;
}

export default function CategoryCreator({ createCategory }: Props) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const category = Object.fromEntries(new FormData(e.currentTarget)).category as string;
        if (category === "" || category === undefined) {
            return alert("Debe ingresar una categoría");
        }

        createCategory(category);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <InputLabel label="Categoría" type="text" placeholder="Animales" id="category" />
            <MainButton text="Agregar" type="submit"/>
        </form>
    );
}