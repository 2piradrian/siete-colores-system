import { useCategories } from "../../../core";
import { CategoriesList, CategoryCreator } from "../../components/organisms";
import { AppLayout, ContainerLayout } from "../../layout";

export function Categories() {
    const { categories, createCategory, deleteCategory } = useCategories();

    return (
        <AppLayout>
            <ContainerLayout title="Categorías" scrollable={false}>
                <CategoryCreator createCategory={createCategory} />
                <CategoriesList categories={categories} deleteCategory={deleteCategory}/>
            </ContainerLayout>
        </AppLayout>
    );
}