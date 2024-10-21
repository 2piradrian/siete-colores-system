import { useSubCategories } from "../../../core";
import { SubCategoriesList } from "../../components/organisms/subcategories-list/subcategories-list";
import { SubCategoryCreator } from "../../components/organisms/subcategory-creator/subcategory-creator";
import { AppLayout, ContainerLayout } from "../../layout";

export function SubCategories() {
    const { subcategories, createSubCategory, deleteSubCategory } = useSubCategories();

    return (
        <AppLayout>
            <ContainerLayout title="Sub-Categorías" scrollable={false}>
                <SubCategoryCreator createSubCategory={createSubCategory} />
                <SubCategoriesList subcategories={subcategories} deleteSubCategory={deleteSubCategory}/>
            </ContainerLayout>
        </AppLayout>
    );
}