import { allProducts } from "../../../data-structures/tables";
import { Product } from "../../../types/types";
import ProductsTable from "../../molecules/products-table/products-table";
import ProductForm from "../../molecules/product-form/product-form";
import style from "./style.module.css";

type Props = {
    product: Product | null;
    products: Product[];
    onClick: (code: string) => void;
    updateProduct: (product: Product) => Promise<void>;
    createProduct: (product: Product) => Promise<void>;
    deleteProduct: (code: string) => Promise<void>;
    openUpdate: boolean;
    setOpenUpdate: (open: boolean) => void;
    openCreate: boolean;
    setOpenCreate: (open: boolean) => void;
};

export default function ProductsList(props: Props) {
    const {product, products, onClick, createProduct, deleteProduct, updateProduct, openUpdate, setOpenUpdate ,openCreate, setOpenCreate} = props;
    
    return (
        <div className={style.container}>
            <ProductsTable 
                table={allProducts}
                products={products} 
                onClick={onClick}
            />
            {openUpdate && (
				<ProductForm
					empty={false} 
					product={product} 
					setOpen={setOpenUpdate} 
					onSubmit={updateProduct} 
					onDelete={deleteProduct} />
			)}
			{openCreate && (
				<ProductForm 
					empty 
					product={null} 
					setOpen={setOpenCreate} 
					onSubmit={createProduct} 
					onDelete={deleteProduct} />
			)}
        </div>
    );
}