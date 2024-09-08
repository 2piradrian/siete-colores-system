import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../core";
import { AppLayout, ContainerLayout } from "../../layout";
import { SearchProducts } from "../../components/molecules";
import { ProductsList } from "../../components/organisms";

export function Products() {
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