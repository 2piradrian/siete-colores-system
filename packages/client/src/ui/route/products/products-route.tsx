import { useNavigate } from "react-router-dom";
import { AppLayout, ContainerLayout } from "../../layout";
import SearchProducts from "../../components/search-products/search-products";
import ProductsList from "../../components/product-list/products-list";
import FAButton from "../../components/fa-button/fa-button";
import useViewModel from "./viewmodel/useViewModel";
import { ProductEntity } from "../../../domain";

export default function ProductsRoute() {

    const navigate = useNavigate();
	const { loading, products, searchProducts } = useViewModel();
    
    return (
        <AppLayout>
            <ContainerLayout title="Productos" scrollable={false}>
                {loading && <p>Cargando...</p>}
                {!loading && products && (
                    <>
                        <SearchProducts onSubmit={searchProducts}/>
                        <ProductsList
                            products={products} 
                            onRowClick={(product: ProductEntity) => {navigate(`/products/${product.code}`)}}
                        />
                    </>
                    )
                }
    			<FAButton content="+" onClick={() => {navigate("/products/new/")}} />
            </ContainerLayout>
        </AppLayout>
    );
}