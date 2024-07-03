import SearchProducts from "../../components/molecules/search-products/search-products";
import useProducts from "../../hooks/useProducts";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Products() {
    const { setSearch } = useProducts();
    
    return (
        <AppLayout>
            <ContainerLayout title="Productos">
                <SearchProducts setSearch={setSearch}/>
                {/* 
                <ProductsList /> */}
                Productos
            </ContainerLayout>
        </AppLayout>
    );
}