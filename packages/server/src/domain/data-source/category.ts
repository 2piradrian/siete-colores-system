import { CategoryEntity } from "../entity/category";

export abstract class CategoryDataSource {
    // --- ---
    public abstract getAll(): Promise<CategoryEntity[]>
    // --- ---
    public abstract create(category: CategoryEntity): Promise<CategoryEntity>
    // --- ---
    public abstract delete(name: string): Promise<void>
}