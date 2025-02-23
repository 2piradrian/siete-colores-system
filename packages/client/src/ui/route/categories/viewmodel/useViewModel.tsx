import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { CategoryEntity } from "../../../../domain";

export default function useViewModel() {

    const { categoriesRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<CategoryEntity[]>([]);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            setLoading(true);

            const categoriesFetched = await categoriesRepository.getCategories() || [];
            setCategories(categoriesFetched);

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al cargar los productos");
        }
    };

    const createCategory = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();

            const form = Object.fromEntries(new FormData(e.currentTarget));
            
            const category = CategoryEntity.fromObject({
                ...form,
            });

            await categoriesRepository.createCategory(category);

            alert("Categoría creada con éxito");
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al crear la categoría");
            return Promise.reject();
        }
    }

    const deleteCategory = async (category: CategoryEntity): Promise<void> => {
        try {
            await categoriesRepository.deleteCategory(category);
            alert("Categoría eliminada con éxito");
            fetch();
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al eliminar la categoría");
        }
    };

    return { 
        loading, 
        categories,
        createCategory,
        deleteCategory,
    };

};