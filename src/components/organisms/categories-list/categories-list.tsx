import { Category } from "../../../types/types";
import TableHeader from "../../atoms/table-header/table-header";
import TableRow from "../../atoms/table-row/table-row";
import style from "./style.module.css";

type Props = {
    categories: Category[];
    deleteCategory: (category: string) => void;
}

export default function CategoriesList({ categories, deleteCategory }: Props) {

    const handleDelete = (category: string) => {
        deleteCategory(category);
    };

    return (
        <div className={style.container}>
            <table className={style.table}>
                <TableHeader params={["Categoría"]} />
                <tbody>
                    {
                        categories.map((category) => (
                            <TableRow 
                                content={[category.name]} 
                                onClick={() => {handleDelete(category.name)}} 
                                key={category.name} 
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};