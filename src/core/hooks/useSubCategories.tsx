import { useEffect, useState } from "react";
import { SubCategoriesRepository } from "../../infrastructure";
import { SubCategory } from "../../domain/types/subcategory";

export function useSubCategories(){
    const [subcategories, setSubCategories] = useState<SubCategory[]>([]);

    const subcategoriesRepository = new SubCategoriesRepository();

    useEffect(() => {
        fetchSubCategories();
    }, []);

    const fetchSubCategories = async () => {
        try {
            const response = await subcategoriesRepository.getSubCategories();
            setSubCategories(response);
        } 
        catch (error) {
            alert(error);
        }
    };

    const createSubCategory = async (subcategory: string) => {
        try {
            await subcategoriesRepository.createSubCategory(subcategory);
            alert("Categoría creada con éxito");

            fetchSubCategories();
        }
        catch (error) {
            alert(error);
        }
    };

    const deleteSubCategory = async (name: string) => {
        try {
            const response = confirm("¿Estás seguro de que quieres eliminar la subcategoría " + name + "?");
            if (!response) return;
            
            await subcategoriesRepository.deleteSubCategory(name);
            alert("Categoría eliminada con éxito");

            fetchSubCategories();
        }
        catch (error) {
            alert(error);
        }
    };

    return { subcategories, createSubCategory, deleteSubCategory};
};