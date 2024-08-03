import { allProducts } from "../../../data-structures/tables";
import { Product } from "../../../types/types";
import ProductsTable from "../../molecules/products-table/products-table";
import FAButton from "../../atoms/fa-button/fa-button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

type Props = {
    products: Product[];
    onClick: (code: string) => void;
};

export default function ProductsList({products, onClick}: Props) {
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