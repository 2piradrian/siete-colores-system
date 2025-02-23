import { HTTPClient } from "../../core";
import { SubCategoriesDataSourceI, SubCategoryEntity } from "../../domain";

export class SubCategoriesApiDataSource implements SubCategoriesDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getSubCategories(): Promise<SubCategoryEntity[]> {
        try {
            return await this.httpClient.get("/subcategories/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo las categorías: " + error);
        }

    }

    public async createSubCategory(subCategory: SubCategoryEntity): Promise<void> {
        try {
            await this.httpClient.post("/subcategories/create", subCategory);
        }
        catch (error) {
            throw new Error("Error creando la categoría: " + error);
        }
    }

    public async deleteSubCategory(subCategory: SubCategoryEntity): Promise<void> {
        try {
            await this.httpClient.delete("/subcategories/delete", subCategory);
        }
        catch (error) {
            throw new Error("Error eliminando la categoría: " + error);
        }
    }

}