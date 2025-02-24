import { CategoryEntity, CategoryRepository } from "../../domain";
import { MongoCategoryDataSource } from "../data-source/mongo-category";

export class CategoryRepository_I implements CategoryRepository {
    private dataSource: MongoCategoryDataSource;

    constructor() {
        this.dataSource = new MongoCategoryDataSource();
    }

    public getAll(): Promise<CategoryEntity[]> {
        return this.dataSource.getAll();
    }

    public create(category: CategoryEntity): Promise<CategoryEntity> {
        return this.dataSource.create(category);
    }

    public delete(name: string): Promise<void> {
        return this.dataSource.delete(name);
    }

}