import { useEffect, useState } from "react";
import HTTPClient from "../adapters/http-client";
import { Category } from "../../domain";

export function useCategories(){
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
            const response = confirm("¿Estás seguro de que quieres eliminar la categoría " + name + "?");
            if (!response) {
                return;
            }
            await httpClient.delete("/categories/delete", { name });
            alert("Categoría eliminada con éxito");

            fetchCategories();
        }
        catch (error) {
            alert("Error al eliminar la categoría: " + error);
        }
    };

    return { categories, createCategory, deleteCategory};
};