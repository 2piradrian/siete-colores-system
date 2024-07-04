import { allProducts } from "../../../data-structures/tables";
import { Product } from "../../../types/types";
import ProductsTable from "../../molecules/products-table/products-table";
import style from "./style.module.css";

type Props = {
    products: Product[];
    onClick: (code: string) => void;
};

export default function ProductsList({ products, onClick }: Props) {
    
    return (
        <div className={style.container}>
            <ProductsTable 
                table={allProducts}
                products={products} 
                onClick={onClick}
            />
        </div>
    );
}