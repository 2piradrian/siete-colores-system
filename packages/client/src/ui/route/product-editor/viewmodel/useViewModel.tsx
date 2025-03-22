import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRepositories } from "../../../../core";
import { CategoryEntity, ProductEntity, SubCategoryEntity } from "../../../../domain";
import toast from "react-hot-toast";

export default function useViewModel() {

    const { code = "" } = useParams();
    const { productsRepository, categoriesRepository, subCategoriesRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<ProductEntity | undefined>();
    const [categories, setCategories] = useState<CategoryEntity[]>([]);
    const [subCategories, setSubcategories] = useState<SubCategoryEntity[]>([]);
    const [selectedSubcategories, setSelectedSubCategories] = useState<string[]>([]);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, [code]);

    const onAddSubcategory = (subcategory: string) => {
        setSelectedSubCategories([...selectedSubcategories, subcategory]);
    }

    const onRemoveSubcategory = (subcategory: string) => {
        setSelectedSubCategories(
            selectedSubcategories.filter((selectedSubcategory) => selectedSubcategory !== subcategory)
        );
    }

    const fetch = async () => {
        try {
            setLoading(true);

            if (code !== "") {
                const productFetched = await productsRepository.getProductByCode(code) || undefined;
                setProduct(productFetched);
                setSelectedSubCategories(productFetched?.subcategories || []);
            }
            else {
                setProduct(undefined);
            }

            const categoriesFetched = await categoriesRepository.getCategories();
            setCategories(categoriesFetched);

            const subCategoriesFetched = await subCategoriesRepository.getSubCategories();
            setSubcategories(subCategoriesFetched);

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al cargar el producto");
        }
    };

    const createProduct = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));

            const product = ProductEntity.fromObject({
                ...form,
                price: Number(form.price),
                offertPrice: form.offertPrice ? Number(form.offertPrice) : undefined,
                available: form.available === "Disponible" ? true : false,
                subcategories: selectedSubcategories
            });

            await productsRepository.createProduct(product);
            
            toast.success("Producto creado con éxito");
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al crear el producto");
            return Promise.reject();
        }
    }

    const updateProduct = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));

            const product = ProductEntity.fromObject({
                ...form,
                price: Number(form.price),
                offertPrice: form.offertPrice ? Number(form.offertPrice) : undefined,
                available: form.available === "Disponible" ? true : false,
                subcategories: selectedSubcategories,
                keywords: (form.keywords as string).split(" ")
            });

            await productsRepository.updateProduct(product);
            
            toast.success("Producto actualizado con éxito");
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al actualizar el producto");
            return Promise.reject();
        }
    };

    const deleteProduct = async (): Promise<void> => {
        try {
            if (code) {
                await productsRepository.deleteProduct(code);
                toast.success("Producto eliminado con éxito");
            }
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al eliminar el producto");
        }
    };

    return { 
        loading, 
        product,
        categories,
        subCategories,
        selectedSubcategories,
        onAddSubcategory,
        onRemoveSubcategory,
        createProduct,
        updateProduct,
        deleteProduct
    };

};