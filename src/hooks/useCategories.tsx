import { useEffect, useState } from "react";
import { Category } from "../types/types";
import HTTPClient from "../adapters/http-client";

export default function useCategories(){
    const httpClient = new HTTPClient();

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await httpClient.get("/categories/get-all");
            if (!response) {
                throw new Error("No se han encontrado categorías");
            }

            setCategories(response);
        } 
        catch (error) {
            alert("Error al cargar las categorías: " + error);
        }
    };

    const createCategory = async (category: string) => {
        try {
            if (!category) {
                throw new Error("No se puede crear una categoría sin nombre");
            }
            await httpClient.post("/categories/create", { name: category });
            alert("Categoría creada con éxito");

            fetchCategories();
        }
        catch (error) {
            alert("Error al crear la categoría: " + error);
        }
    };

    const deleteCategory = async (name: string) => {
        try {
            await httpClient.delete("/categories/delete", { data: { name }});
            alert("Categoría eliminada con éxito");

            fetchCategories();
        }
        catch (error) {
            alert("Error al eliminar la categoría: " + error);
        }
    };

    return { categories, createCategory, deleteCategory};
};