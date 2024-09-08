import { useEffect, useState } from "react";
import { Product } from "../../domain";
import { ProductsRepository } from "../../infrastructure";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>("");

    const productsRepository = new ProductsRepository();

    useEffect(() => {
        if (search) {
            searchProducts();
        }
        else {
            updateList();
        }
    }, [search]);

    const updateList = async () => {
        const data = await getProducts() || [];
        setProducts(data);
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
            return await productsRepository.getProducts();
        }
        catch (error) {
            alert(error);
        }
    };

    const getProductByCode = async (code: string) => {
        try {
            return await productsRepository.getProductByCode(code);
        }
        catch (error) {
            alert(error);
        }
    };

    const createProduct = async (product: Product) => {
		try {
            await productsRepository.createProduct(product);
            alert("Producto creado correctamente");
			updateList();
		} 
		catch (error) {
			alert(error);
		}
	};

    const updateProduct = async (product: Product) => {
		try {
            await productsRepository.updateProduct(product);
            alert("Producto actualizado correctamente");
			updateList()
		} 
		catch (error) {
			alert(error);
		}
	};

    const deleteProduct = async (code: string) => {
        try {
            await productsRepository.deleteProduct(code);
            alert("Producto eliminado correctamente");
            updateList();
        }
        catch (error) {
            alert(error);
        }
    };

    const updatePrices = async (serie: string, percent: number) => {
		try {
            await productsRepository.updateProductPrices(serie, percent);
			alert("Precios actualizados correctamente");
			updateList()
		} 
		catch (error) {
			alert(error);
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