import { useEffect, useState } from "react";
import { ProductEntity } from "../../../../domain";
import { useRepositories } from "../../../../core";

export default function useViewModel() {

    const { productsRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<ProductEntity[] | undefined>();
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    } , []);

    const fetch = async () => {
        try {
            setLoading(true);

            const productsFetched = await productsRepository.getProducts() || [];
            setProducts(productsFetched);  

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al cargar las estadísticas");
        }
    };

    const searchProducts = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
		    const searchForm = Object.fromEntries(new FormData(e.currentTarget));
            const search = searchForm.search as string;
            
            const response = await productsRepository.getProducts();

            if (!search) {
                setProducts(response);
                return;
            };

            const filteredProducts = response?.filter((product: ProductEntity) => {
                return (
                    product.name.toLowerCase().includes(search.toLowerCase()) ||
                    product.code.toLowerCase().includes(search.toLowerCase()) ||
                    product.keywords.includes(search.toLowerCase())           ||
                    product.category.toLowerCase().includes(search.toLowerCase())
                );
            });
            setProducts(filteredProducts || []);
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al buscar productos");
        }
    };

    return {
        loading,
        products,
        searchProducts,
    };

};