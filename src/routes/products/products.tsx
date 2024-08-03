import { useNavigate } from "react-router-dom";
import SearchProducts from "../../components/molecules/search-products/search-products";
import ProductsList from "../../components/organisms/product-list/products-list";
import useProducts from "../../hooks/useProducts";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Products() {
    const navigate = useNavigate();
	const { products, setSearch } = useProducts();

    const handleSelect = async (code: string) => {
		const product = products.filter((product) => product.code === code)[0];
		navigate("/products/" + product.code);
	};
    
    return (
        <AppLayout>
            <ContainerLayout title="Productos" scrollable={false}>
                <SearchProducts setSearch={setSearch}/>
                <ProductsList 
                    products={products} 
                    onClick={(code: string) => {handleSelect(code)}}
                />
            </ContainerLayout>
        </AppLayout>
    );
}