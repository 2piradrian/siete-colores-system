import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../../components/molecules/product-form/product-form";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";
import style from "./style.module.css"

export default function ProductEditor() {
    const [code, setCode] = useState<string | undefined>(undefined);
    const params = useParams();

    useEffect(() => {
        if (params.code) {
            setCode(params.code);
        }
    }, [params]);
    
    return (
        <AppLayout>
            <ContainerLayout title="Editor de Productos">
                <h2 className={style.subtitle}>{code ?? "Nuevo producto"}</h2>
                <ProductForm product={null} onDelete={()=>{}} onSubmit={()=>{}}/>
            </ContainerLayout>
        </AppLayout>
    );
}