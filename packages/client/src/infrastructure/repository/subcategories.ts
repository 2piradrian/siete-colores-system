import { SubCategoriesDataSourceI, SubCategoriesRepositoryI, SubCategoryEntity } from "../../domain";
import { SubCategoriesApiDataSource } from "../data-source/subcategories-api";

export class SubCategoriesRepository implements SubCategoriesRepositoryI {

    private dataSource: SubCategoriesDataSourceI;

    constructor(dataSource: SubCategoriesDataSourceI = new SubCategoriesApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getSubCategories(): Promise<SubCategoryEntity[]> {
        try {
            return await this.dataSource.getSubCategories();
        }
        catch (error) {
            throw error;
        }
    }

    public async createSubCategory(category: string): Promise<void> {
        try {
            await this.dataSource.createSubCategory(category);
        }
        catch (error) {
            throw error;
        }
    }

    public async deleteSubCategory(name: string): Promise<void> {
        try {
            await this.dataSource.deleteSubCategory(name);
        }
        catch (error) {
            throw error;
        }
    }
    
}