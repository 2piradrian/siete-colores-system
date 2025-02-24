import { SubCategoryEntity, SubCategoryRepository } from "../../domain";
import { MongoSubCategoryDataSource } from "../data-source/mongo-subcategory";

export class SubCategoryRepository_I implements SubCategoryRepository {
    private dataSource: MongoSubCategoryDataSource;

    constructor() {
        this.dataSource = new MongoSubCategoryDataSource();
    }

    public getAll(): Promise<SubCategoryEntity[]> {
        return this.dataSource.getAll();
    }

    public create(subcategory: SubCategoryEntity): Promise<SubCategoryEntity> {
        return this.dataSource.create(subcategory);
    }

    public delete(name: string): Promise<void> {
        return this.dataSource.delete(name);
    }

}