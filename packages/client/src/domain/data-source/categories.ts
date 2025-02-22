import { Category } from "../types/category";

export abstract class CategoriesDataSourceI {
    abstract getCategories(): Promise<Category[]>;
    abstract createCategory(category: string): Promise<void>;
    abstract deleteCategory(name: string): Promise<void>;
}