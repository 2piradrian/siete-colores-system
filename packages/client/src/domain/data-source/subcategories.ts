import { SubCategory } from "../types/subcategory";

export abstract class SubCategoriesDataSourceI {
    abstract getSubCategories(): Promise<SubCategory[]>;
    abstract createSubCategory(subcategory: string): Promise<void>;
    abstract deleteSubCategory(name: string): Promise<void>;
}