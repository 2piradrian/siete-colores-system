import { Product } from "../../../types/types";
import ProductTable from "../../molecules/products-table/products-table";

type Props = {
    products: Product[];
};

export default function ProductsList({ products }: Props) {
    
    return (
        <div>
            <ProductTable products={products} />
            {products.map(product => (
                <div key={product.code}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}