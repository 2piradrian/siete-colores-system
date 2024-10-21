import { SubCategory } from "../../../../domain";
import { TableHeader, TableRow } from "../../atoms";
import style from "./style.module.css";

type Props = {
    subcategories: SubCategory[];
    deleteSubCategory: (category: string) => void;
}

export function SubCategoriesList({ subcategories, deleteSubCategory }: Props) {

    const handleDelete = (category: string) => {
        deleteSubCategory(category);
    };

    return (
        <div className={`${style.container} table`}>
            <table className={style.table}>
                <TableHeader params={["Categoría"]} />
                <tbody>
                    {subcategories.map((subcategory) => (
                            <TableRow 
                                content={[subcategory.name]} 
                                onClick={() => {handleDelete(subcategory.name)}} 
                                key={subcategory.name} 
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};