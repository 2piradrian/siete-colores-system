import { Category } from "../../../../domain";
import { TableHeader, TableRow } from "../../atoms";
import style from "./style.module.css";

type Props = {
    categories: Category[];
    deleteCategory: (category: string) => void;
}

export function CategoriesList({ categories, deleteCategory }: Props) {

    const handleDelete = (category: string) => {
        deleteCategory(category);
    };

    return (
        <div className={`${style.container} table`}>
            <table className={style.table}>
                <TableHeader params={["Categoría"]} />
                <tbody>
                    {categories.map((category) => (
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