import InputLabel from "../input-label/input-label";
import MainButton from "../main-button/main-button";
import style from "./style.module.css";

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SubCategoryCreator({ onSubmit }: Props) {

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <InputLabel label="SubCategoría" type="text" placeholder="Día del maestro" id="name" required />
            <MainButton text="Agregar" type="submit"/>
        </form>
    );
}