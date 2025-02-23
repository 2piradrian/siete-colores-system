import { SubCategoryEntity } from "../entity/subcategory";

export abstract class SubCategoriesDataSourceI {
    abstract getSubCategories(): Promise<SubCategoryEntity[]>;
    abstract createSubCategory(subCategory: SubCategoryEntity): Promise<void>;
    abstract deleteSubCategory(subCategory: SubCategoryEntity): Promise<void>;
}