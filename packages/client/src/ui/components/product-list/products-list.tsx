import { priceFormatter } from "../../../core";
import { allProducts, ProductEntity } from "../../../domain";
import Table from "../table/table";
import style from "./style.module.css";

type Props = {
    products: ProductEntity[];
    onRowClick: (code: string) => void;
};

export default function ProductsList({products, onRowClick}: Props) {
    return (
        <div className={`${style.container} table`}>
            <Table
                table={allProducts}
                content={products.map((product) => ({
                    ...product,
                    price: priceFormatter(product.price),
                    offertPrice: product.offertPrice ? priceFormatter(product.offertPrice) : undefined,
                }))} 
                onClick={onRowClick}
            />
        </div>
    );
}