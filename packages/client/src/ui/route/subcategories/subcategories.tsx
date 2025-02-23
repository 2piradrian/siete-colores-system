import { AppLayout, ContainerLayout } from "../../layout";
import { allCategories, SubCategoryEntity } from "../../../domain";
import SubCategoryCreator from "../../components/subcategory-creator/subcategory-creator";
import Table from "../../components/table/table";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export function SubCategoriesRoute() {

    const { loading, subCategories, createSubCategory, deleteSubCategory } = useViewModel();

    return (
        <AppLayout>
            <ContainerLayout title="SubCategorías" scrollable={false}>
                <SubCategoryCreator onSubmit={createSubCategory} />
                {loading && <p>Cargando...</p>}
                {!loading && 
                    <div className={`${style.container} table`}>
                        <Table 
                            content={subCategories}
                            onClick={(subCategory: SubCategoryEntity) => {
                                deleteSubCategory(subCategory);
                            }}
                            table={allCategories}
                        />
                    </div>
                }
            </ContainerLayout>
        </AppLayout>
    );
}