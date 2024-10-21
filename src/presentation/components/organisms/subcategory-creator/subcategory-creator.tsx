import { InputLabel, MainButton } from "../../atoms";
import style from "./style.module.css";

type Props = {
    createSubCategory: (subcategory: string) => void;
}

export function SubCategoryCreator({ createSubCategory }: Props) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const subcategory = Object.fromEntries(new FormData(e.currentTarget)).subcategory as string;
        if (subcategory === "" || subcategory === undefined) {
            return alert("Debe ingresar una categoría");
        }

        createSubCategory(subcategory);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <InputLabel label="Sub-Categoría" type="text" placeholder="Navidad" id="subcategory" required />
            <MainButton text="Agregar" type="submit" />
        </form>
    );
}