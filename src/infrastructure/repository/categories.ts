import { CategoriesDataSourceI, CategoriesRepositoryI, Category } from "../../domain";
import { CategoriesApiDataSource } from "../data-source/categories-api";

export class CategoriesRepository implements CategoriesRepositoryI {

    private dataSource: CategoriesDataSourceI;

    constructor(dataSource: CategoriesDataSourceI = new CategoriesApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getCategories(): Promise<Category[]> {
        try {
            const response = await this.dataSource.getCategories();

            return response;
        }
        catch (error) {
            throw error;
        }
    }

    public async createCategory(category: string): Promise<void> {
        try {
            await this.dataSource.createCategory(category);
        }
        catch (error) {
            throw error;
        }
    }

    public async deleteCategory(name: string): Promise<void> {
        try {
            await this.dataSource.deleteCategory(name);
        }
        catch (error) {
            throw error;
        }
    }
    
}