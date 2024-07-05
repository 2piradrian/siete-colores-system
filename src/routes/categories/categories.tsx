import CategoriesList from "../../components/organisms/categories-list/categories-list";
import CategoryCreator from "../../components/organisms/category-creator/category-creator";
import useCategories from "../../hooks/useCategories";
import AppLayout from "../../layout/app-layout";
import ContainerLayout from "../../layout/container-layout";

export default function Categories() {
    const { categories, createCategory, deleteCategory } = useCategories();

    return (
        <AppLayout>
            <ContainerLayout title="Categorías">
                <CategoryCreator createCategory={createCategory} />
                <CategoriesList categories={categories} deleteCategory={deleteCategory}/>
            </ContainerLayout>
        </AppLayout>
    );
}