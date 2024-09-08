import { useEffect, useState } from "react";
import { Product } from "../../domain";
import HTTPClient from "../adapters/http-client";

export function useProducts() {
    const httpClient = new HTTPClient();

    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        if (search) {
            searchProducts();
        }
        else {
            updateList();
        }
    }, [search]);

    const updateList = async () => {
        const data = await getProducts();

        data.map((product: Product) => { // Define default values for the optional fields
            product.description = product.description || "";
        });

        setProducts(data || []);
    };

    const searchProducts = async () => {
        const data = await getProducts();
        const filteredProducts = data?.filter((product: Product) => {
            return (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.code.toLowerCase().includes(search.toLowerCase()) ||
                product.keywords.includes(search.toLowerCase())           ||
                product.category.toLowerCase().includes(search.toLowerCase())
            );
        });
        setProducts(filteredProducts || []);
    };

    const getProducts = async () => {
        try {
            const data = await httpClient.get("/products/get-all");

            return data;
        }
        catch (error) {
            alert("Error obteniendo los productos: " + error);
        }
    };

    const getProductByCode = async (code: string) => {
        try {
            const data = await httpClient.get("/products/get-by-code", { code: code });

            return data;
        }
        catch (error) {
            alert("Error buscando el producto: " + error);
        }
    };

    const createProduct = async (product: Product) => {
		try {
			if (products.find((p) => p.code === product.code)) {
				throw new Error("El código ya existe");
			}
            await httpClient.post("/products/create", product);
            alert("Producto creado correctamente");
			updateList();
		} 
		catch (error) {
			alert("Error creando el producto: " + error);
		}
	};

    const updateProduct = async (product: Product) => {
		try {
            await httpClient.put("/products/update", product);
            alert("Producto actualizado correctamente");
			updateList()
		} 
		catch (error) {
			alert("Error actualizando el producto: " + error);
		}
	};

    const deleteProduct = async (code: string) => {
        try {
            await httpClient.delete("/products/delete", { code: code });
            alert("Producto eliminado correctamente");
            updateList();
        }
        catch (error) {
            alert("Error eliminando el producto: " + error);
        }
    };

    const updatePrices = async (serie: string, percent: number) => {
		try {
            await httpClient.put("/products/update-prices", {serie, percent});
			alert("Precios actualizados correctamente");

			updateList()
		} 
		catch (error) {
			alert("Error actualizando los precios: " + error);
		}
	
	}

    return {
        setSearch,
        products,
        getProductByCode,
        createProduct,
        updateProduct,
        deleteProduct, 
        updatePrices
    };
}