import { CategoriesDataSourceI, CategoriesRepositoryI, CategoryEntity } from "../../domain";
import { CategoriesApiDataSource } from "../data-source/categories-api";

export class CategoriesRepository implements CategoriesRepositoryI {

    private dataSource: CategoriesDataSourceI;

    constructor(dataSource: CategoriesDataSourceI = new CategoriesApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getCategories(): Promise<CategoryEntity[]> {
        try {
            return await this.dataSource.getCategories();
        }
        catch (error) {
            throw error;
        }
    }

    public async createCategory(category: CategoryEntity): Promise<void> {
        try {
            await this.dataSource.createCategory(category);
        }
        catch (error) {
            throw error;
        }
    }

    public async deleteCategory(category: CategoryEntity): Promise<void> {
        try {
            await this.dataSource.deleteCategory(category);
        }
        catch (error) {
            throw error;
        }
    }
    
}