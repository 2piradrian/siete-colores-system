import { CategoryEntity } from "../entity/category";

export abstract class CategoriesRepositoryI {
    abstract getCategories(): Promise<CategoryEntity[]>;
    abstract createCategory(category: CategoryEntity): Promise<void>;
    abstract deleteCategory(category: CategoryEntity): Promise<void>;
}