import { CategoryEntity, ProductEntity, SubCategoryEntity } from "../../../domain";
import DestructiveButton from "../destructive-button/destructive-button";
import InputLabel from "../input-label/input-label";
import MainButton from "../main-button/main-button";
import MultipleSelector from "../multiple-selector/multiple-selector";
import SelectLabel from "../select-label/select-label";
import TextAreaLabel from "../textarea-label/textarea-label";
import style from "./style.module.css"

type Props = {
    product: ProductEntity | undefined;
    categories: CategoryEntity[];
    subCategories: SubCategoryEntity[];
    selectedSubcategories: string[];
    onAddSubcategory: (subcategory: string) => void;
    onRemoveSubcategory: (subcategory: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
    onDelete?: () => void;
}

export default function ProductForm({ 
    product, 
    categories, 
    subCategories, 
    selectedSubcategories,
    onAddSubcategory, 
    onRemoveSubcategory, 
    onSubmit, 
    onCancel, 
    onDelete
}: Props) {

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={onSubmit}>
                <InputLabel
                    id="code" 
                    label="Código" 
                    placeholder="A236" 
                    type="text" 
                    value={product?.code} 
                    required
                    />
                <InputLabel 
                    id="name" 
                    label="Nombre" 
                    placeholder="LETRA CURSIVA" 
                    type="text" 
                    value={product?.name} 
                    required
                    />
                <InputLabel 
                    id="size" 
                    placeholder="15mm x 15mm" 
                    label="Tamaño" 
                    type="text" 
                    value={product?.size} 
                    required
                    />
                <InputLabel 
                    id="price" 
                    placeholder="3090" 
                    label="Precio" 
                    type="number" 
                    value={product?.price?.toString()} 
                    required
                    />
                <InputLabel 
                    id="offertPrice" 
                    placeholder="1000" 
                    label="Precio de oferta" 
                    type="number" 
                    value={product?.offertPrice?.toString()} 
                    required={false}
                    />
                <SelectLabel
                    id="available" 
                    label="Disponibilidad" 
                    value={product?.available ? "Disponible" : "No disponible"} 
                    values={["Disponible", "No disponible"]} 
                />
                <SelectLabel
                    id="category" 
                    label="Categoría" 
                    value={product?.category} 
                    values={categories.map((category) => category.name)}
                    />
                <MultipleSelector
                    id="subcategories"
                    label="Sub-Categorías"
                    options={subCategories.map((subcategory) => subcategory.name)}
                    selected={selectedSubcategories}
                    buttonText="Agregar Sub-Categoría"
                    onAdd={(subcategory: string) => {onAddSubcategory(subcategory)}}
                    onRemove={(subcategory: string) => {onRemoveSubcategory(subcategory)}}
                />
                <TextAreaLabel
                    id="keywords"
                    label="Palabras clave"
                    placeholder="cursiva letra sello"
                    value={product?.keywords?.join(" ")}
                    required
                    />
                <TextAreaLabel
                    id="description"
                    label="Descripción"
                    placeholder="Conjunto de letras cursivas para sello apto para..."
                    value={product?.description}
                    required={false}
                    />
                <div className={style.buttons}>
                    <div className={style.buttonContainer}>
                        <MainButton text={!product ? "Crear" : "Actualizar"} type="submit"/>
                        <DestructiveButton text="Cancelar" type="button" onClick={onCancel}/>
			        </div>
                    <div className={style.buttonContainer}>
                        {onDelete && <DestructiveButton text="Eliminar" type="button" onClick={onDelete}/>}   
                    </div>
                </div>
            </form>
        </div>
    )
}