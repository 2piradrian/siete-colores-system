import { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Product } from "../../../types/types";
import InputLabel from "../../atoms/input-label/input-label";
import SelectLabel from "../../atoms/select-label/select-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css"

type Props = {
    empty: boolean;
    product: Product | null;
    setOpen: (open: boolean) => void;
    onSubmit: (product: Product) => Promise<void>;
    onDelete: (code: string) => Promise<void>;
}

export default function ProductForm({ empty, product, setOpen, onSubmit, onDelete }: Props) {
    const [formData, setFormData] = useState<Product | undefined>({...product as Product} || undefined);

    useEffect(() => {
        if (product) setFormData({...product});
    }, [product]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product = Object.fromEntries(new FormData(e.currentTarget));

        onSubmit({
            code: product.code as string,
            name: product.name as string,
            category: product.category as string,
            size: product.size as string,
            price: Number(product.price),
        }).then(() => {setOpen(false)});
    }

    const handleDelete = () => {
        onDelete(formData?.code || "");
        setOpen(false);
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>{empty ? "Crear producto" : "Actualizar producto"}</h2>
                <InputLabel
                    id="code" 
                    label="Código" 
                    placeholder="A236" 
                    type="text" 
                    value={formData?.code || ""} 
                    />
                <InputLabel 
                    id="name" 
                    label="Nombre" 
                    placeholder="LETRA CURSIVA" 
                    type="text" 
                    value={formData?.name || ""} 
                    />
                <SelectLabel
                    id="category" 
                    label="Categoría" 
                    value={formData?.category || ""} 
                    />
                <InputLabel 
                    id="size" 
                    placeholder="15mm x 15mm" 
                    label="Tamaño" 
                    type="text" 
                    value={formData?.size || ""} 
                    />
                <InputLabel 
                    id="price" 
                    placeholder="3090.50" 
                    label="Precio" 
                    type="number" 
                    value={formData?.price?.toString() || ""} 
                    />
                <div className={style.buttonContainer}>
                    <MainButton text={empty? "Crear" : "Actualizar"} type="submit"/>
                    <MainButton text="Cancelar" type="button" onClick={() => setOpen(false)}/>
			    </div>
                {!empty &&
                    <div className={style.delete} onClick={handleDelete}>
				        <MdOutlineDeleteForever />
			        </div>
                }   
            </form>
        </div>
    )
}