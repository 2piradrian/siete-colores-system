import { useState } from "react";
import SearchProducts from "../../components/molecules/search-products/search-products";
import ProductsList from "../../components/organisms/product-list/products-list";
import useProducts from "../../hooks/useProducts";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";
import { Product } from "../../types/types";

export default function Products() {
	const { products, setSearch, updateProduct, createProduct, deleteProduct } = useProducts();

	const [product, setProduct] = useState<Product | null>(null);
    const [openUpdate, setOpenUpdate] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

    const handleSelect = async (code: string) => {
		const product = products.filter((product) => product.code === code)[0];
		setOpenUpdate(true);
		setProduct(product);
	};
    
    return (
        <AppLayout>
            <ContainerLayout title="Productos">
                <SearchProducts setSearch={setSearch}/>
                <ProductsList 
                    product={product}
                    products={products} 
                    onClick={(code: string) => {handleSelect(code)}}
                    updateProduct={updateProduct}
                    createProduct={createProduct}
                    deleteProduct={deleteProduct}
                    openUpdate={openUpdate}
                    setOpenUpdate={setOpenUpdate}
                    openCreate={openCreate}
                    setOpenCreate={setOpenCreate}
                />
            </ContainerLayout>
        </AppLayout>
    );
}