import { SubCategoryEntity } from "../entity/subcategory";

export abstract class SubCategoryDataSource {
    public abstract getAll(): Promise<SubCategoryEntity[]>
    public abstract create(subcategory: SubCategoryEntity): Promise<SubCategoryEntity>
    public abstract delete(name: string): Promise<void>
}