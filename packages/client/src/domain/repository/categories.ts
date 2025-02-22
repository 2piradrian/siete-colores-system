import { CategoryEntity } from "../entity/category";

export abstract class CategoriesRepositoryI {
    abstract getCategories(): Promise<CategoryEntity[]>;
    abstract createCategory(category: string): Promise<void>;
    abstract deleteCategory(name: string): Promise<void>;
}