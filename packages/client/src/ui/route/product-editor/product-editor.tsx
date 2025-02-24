import { useNavigate } from "react-router-dom";
import { AppLayout, ContainerLayout } from "../../layout";
import ProductForm from "../../components/product-form/product-form";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css"

export default function ProductEditor() {

    const navigate = useNavigate();
    const { 
        loading, 
        product, 
        categories, 
        subCategories, 
        selectedSubcategories, 
        onAddSubcategory, 
        onRemoveSubcategory, 
        createProduct, 
        updateProduct, 
        deleteProduct 
    } = useViewModel();

    return (
        <AppLayout>
            <ContainerLayout title="Editor de Productos" scrollable={true}>
                {loading && <p>Cargando...</p>}
                {!loading && categories && subCategories && (
                    <>
                        <h2 className={style.subtitle}>{product?.code ?? "Nuevo producto"}</h2>
                        <ProductForm
                            product={product} 
                            categories={categories}
                            subCategories={subCategories}
                            selectedSubcategories={selectedSubcategories}
                            onAddSubcategory={onAddSubcategory}
                            onRemoveSubcategory={onRemoveSubcategory}
                            onSubmit={(e) => {
                                if (product?.code) {
                                    console.log("updateProduct", product);
                                    updateProduct(e).then(() => {navigate("/products")});
                                }
                                else {
                                    createProduct(e).then(() => {navigate("/products")});
                                }
                            }}
                            onCancel={() => {
                                navigate("/products")
                            }}
                            onDelete={() => {
                                deleteProduct().then(() => { navigate("/products"); })
                            }}
                        />
                    </>
                )}
            </ContainerLayout>
        </AppLayout>
    );
}