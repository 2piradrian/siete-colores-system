import InputLabel from "../input-label/input-label";
import MainButton from "../main-button/main-button";
import style from "./style.module.css";

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CategoryCreator({ onSubmit }: Props) {

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <InputLabel label="Categoría" type="text" placeholder="Animales" id="category" required/>
            <MainButton text="Agregar" type="submit"/>
        </form>
    );
}