import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../core";
import { Product } from "../../../domain";
import { AppLayout, ContainerLayout } from "../../layout";
import { ProductForm } from "../../components/molecules";
import style from "./style.module.css"

export function ProductEditor() {
    const params = useParams();
    const { getProductByCode, createProduct, deleteProduct, updateProduct } = useProducts();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.code) {
            getProductByCode(params.code as string)
            .then((product) => { setProduct(product) })
            .catch(() => { setProduct(undefined) })
            .finally(() => { setLoading(false) });
        }
        else {
            setLoading(false);
        }
    }, [params.code]);

    useEffect(() => {
        console.log(loading);
    }, [loading]);
    
    return (
        <AppLayout>
            <ContainerLayout title="Editor de Productos" scrollable={true}>
                <h2 className={style.subtitle}>{params.code ?? "Nuevo producto"}</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <ProductForm 
                        product={product} 
                        onDelete={deleteProduct} 
                        onSubmit={params.code ? updateProduct : createProduct} 
                    />
                )}
            </ContainerLayout>
        </AppLayout>
    );
}