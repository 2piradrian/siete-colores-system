import { CategoryEntity } from "../entity/category";

export abstract class CategoriesDataSourceI {
    abstract getCategories(): Promise<CategoryEntity[]>;
    abstract createCategory(category: CategoryEntity): Promise<void>;
    abstract deleteCategory(category: CategoryEntity): Promise<void>;
}