import { AppLayout, ContainerLayout } from "../../layout";
import { allCategories, CategoryEntity } from "../../../domain";
import CategoryCreator from "../../components/category-creator/category-creator";
import Table from "../../components/table/table";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export function CategoriesRoute() {

    const { loading, categories, createCategory, deleteCategory } = useViewModel();

    return (
        <AppLayout>
            <ContainerLayout title="Categorías" scrollable={false}>
                <CategoryCreator onSubmit={createCategory} />
                {loading && <p>Cargando...</p>}
                {!loading && 
                    <div className={`${style.container} table`}>
                        <Table 
                            content={categories}
                            onClick={(name: string) => {
                                deleteCategory(CategoryEntity.fromObject({ name }));
                            }}
                            table={allCategories}
                        />
                    </div>
                }
            </ContainerLayout>
        </AppLayout>
    );
}