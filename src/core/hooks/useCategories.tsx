import { useEffect, useState } from "react";
import { Category } from "../../domain";
import { CategoriesRepository } from "../../infrastructure";

export function useCategories(){
    const [categories, setCategories] = useState<Category[]>([]);

    const categoriesRepository = new CategoriesRepository();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await categoriesRepository.getCategories();
            setCategories(response);
        } 
        catch (error) {
            alert(error);
        }
    };

    const createCategory = async (category: string) => {
        try {
            await categoriesRepository.createCategory(category);
            alert("Categoría creada con éxito");

            fetchCategories();
        }
        catch (error) {
            alert(error);
        }
    };

    const deleteCategory = async (name: string) => {
        try {
            const response = confirm("¿Estás seguro de que quieres eliminar la categoría " + name + "?");
            if (!response) return;
            
            await categoriesRepository.deleteCategory(name);
            alert("Categoría eliminada con éxito");

            fetchCategories();
        }
        catch (error) {
            alert(error);
        }
    };

    return { categories, createCategory, deleteCategory};
};