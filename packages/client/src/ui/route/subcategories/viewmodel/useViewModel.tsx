import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { CategoryEntity, SubCategoryEntity } from "../../../../domain";

export default function useViewModel() {

    const { subCategoriesRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [subCategories, setSubCategories] = useState<CategoryEntity[]>([]);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            setLoading(true);

            const subCategoriesFetched = await subCategoriesRepository.getSubCategories() || [];
            setSubCategories(subCategoriesFetched);

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al cargar las subcategorías");
        }
    };

    const createSubCategory = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            
            const form = Object.fromEntries(new FormData(e.currentTarget));
            
            const subcategory = SubCategoryEntity.fromObject({
                ...form,
            });
            
            await subCategoriesRepository.createSubCategory(subcategory);

            alert("SubCategoría creada con éxito");
            fetch();
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al crear la subcategoría");
            return Promise.reject();
        }
    }

    const deleteSubCategory = async (subCategory: SubCategoryEntity): Promise<void> => {
        try {
            const confirmDelete = window.confirm(`¿Estás seguro de eliminar la subcategoría ${subCategory.name}?`);
            if (!confirmDelete) return;

            await subCategoriesRepository.deleteSubCategory(subCategory);
            alert("SubCategoría eliminada con éxito");
            fetch();
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al eliminar la subcategoría");
        }
    };

    return { 
        loading, 
        subCategories,
        createSubCategory,
        deleteSubCategory,
    };

};