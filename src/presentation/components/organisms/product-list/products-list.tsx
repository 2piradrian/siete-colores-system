import { useNavigate } from "react-router-dom";
import { allProducts, Product } from "../../../../domain";
import { FAButton } from "../../atoms";
import { ProductsTable } from "../../molecules";
import style from "./style.module.css";

type Props = {
    products: Product[];
    onClick: (code: string) => void;
};

export function ProductsList({products, onClick}: Props) {
    const navigate = useNavigate();
    return (
        <div className={`${style.container} table`}>
            <ProductsTable
                table={allProducts}
                products={products} 
                onClick={onClick}
            />
			<FAButton content="+" onClick={() => {navigate("/products/new/")}} />
        </div>
    );
}