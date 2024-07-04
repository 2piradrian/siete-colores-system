import ProductsTable from "../../components/molecules/products-table/products-table";
import SearchProducts from "../../components/molecules/search-products/search-products";
import { allProducts } from "../../data-structures/tables";
import useProducts from "../../hooks/useProducts";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Products() {
    const { products, setSearch  } = useProducts();
    
    return (
        <AppLayout>
            <ContainerLayout title="Productos">
                <SearchProducts setSearch={setSearch}/>
                <ProductsTable 
                    table={allProducts}
                    products={products} 
                    onClick={(code: string) => {console.log(code)}} 
                />
            </ContainerLayout>
        </AppLayout>
    );
}