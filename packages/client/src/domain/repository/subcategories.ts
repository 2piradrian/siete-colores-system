import { SubCategoryEntity } from "../entity/subcategory";

export abstract class SubCategoriesRepositoryI {
    abstract getSubCategories(): Promise<SubCategoryEntity[]>;
    abstract createSubCategory(subcategory: string): Promise<void>;
    abstract deleteSubCategory(name: string): Promise<void>;
}