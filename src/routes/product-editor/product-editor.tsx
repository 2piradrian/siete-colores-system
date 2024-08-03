import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";
import ProductForm from "../../components/molecules/product-form/product-form";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";
import useProducts from "../../hooks/useProducts";
import style from "./style.module.css"

export default function ProductEditor() {
    const { getProductByCode, createProduct, deleteProduct, updateProduct } = useProducts();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const params = useParams();

    useEffect(() => {
        if (params.code) {
            getProductByCode(params.code as string)
            .then((product) => { setProduct(product) })
            .catch(() => { setProduct(undefined) })
        }
    }, [params.code]);
    
    return (
        <AppLayout>
            <ContainerLayout title="Editor de Productos">
                <h2 className={style.subtitle}>{params.code ?? "Nuevo producto"}</h2>
                <ProductForm 
                    product={product} 
                    onDelete={deleteProduct} 
                    onSubmit={params.code ? updateProduct : createProduct}
                />
            </ContainerLayout>
        </AppLayout>
    );
}