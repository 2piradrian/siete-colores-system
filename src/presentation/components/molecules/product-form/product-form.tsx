import { useNavigate } from "react-router-dom";
import { Product } from "../../../../domain";
import { useCategories } from "../../../../core";
import { DestructiveButton, InputLabel, MainButton, SelectLabel, TextAreaLabel } from "../../atoms";
import style from "./style.module.css"

type Props = {
    product: Product | undefined;
    onSubmit: (product: Product) => Promise<void>;
    onDelete: (code: string) => Promise<void>;
}

export function ProductForm({ product, onSubmit, onDelete }: Props) {
    const navigate = useNavigate();
    const { categories } = useCategories();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product = Object.fromEntries(new FormData(e.currentTarget));

        const keywords = (product.keywords as string).split(" ").map((keyword: string) => keyword.trim()).flat();

        onSubmit({
            code: product.code as string,
            name: product.name as string,
            size: product.size as string,
            price: Number(product.price),
            category: product.category as string,
            description: product.description as string,
            keywords: keywords,
            stock: Number(product.stock) || null
        }).then(() => {
            navigate("/products");
        });
    }

    const handleDelete = () => {
        onDelete(product?.code || "");
        navigate("/products");
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <InputLabel
                    id="code" 
                    label="Código" 
                    placeholder="A236" 
                    type="text" 
                    value={product?.code || ""} 
                    required
                    />
                <InputLabel 
                    id="name" 
                    label="Nombre" 
                    placeholder="LETRA CURSIVA" 
                    type="text" 
                    value={product?.name || ""} 
                    required
                    />
                <InputLabel 
                    id="size" 
                    placeholder="15mm x 15mm" 
                    label="Tamaño" 
                    type="text" 
                    value={product?.size || ""} 
                    required
                    />
                <InputLabel 
                    id="price" 
                    placeholder="3090" 
                    label="Precio" 
                    type="number" 
                    value={product?.price?.toString() || ""} 
                    required
                    />
                <InputLabel
                    id="stock"
                    label="Stock"
                    placeholder="Infinito"
                    type="number"
                    value={product?.stock?.toString() || ""}
                    required={false}
                    />
                <SelectLabel
                    id="category" 
                    label="Categoría" 
                    value={product?.category || ""} 
                    values={categories.map((category) => category.name)}
                    />
                <TextAreaLabel
                    id="keywords"
                    label="Palabras clave"
                    placeholder="cursiva letra sello"
                    value={product?.keywords?.join(" ") || ""}
                    required
                    />
                <TextAreaLabel
                    id="description"
                    label="Descripción"
                    placeholder="Conjunto de letras cursivas para sello apto para..."
                    value={product?.description || ""}
                    required={false}
                    />
                <div className={style.buttons}>
                    <div className={style.buttonContainer}>
                        <MainButton text={!product ? "Crear" : "Actualizar"} type="submit"/>
                        <DestructiveButton text="Cancelar" type="button" onClick={() => {navigate("/products")}}/>
			        </div>
                    <div className={style.buttonContainer}>
                        {product && <DestructiveButton text="Eliminar" type="button" onClick={handleDelete}/>}   
                    </div>
                </div>
            </form>
        </div>
    )
}