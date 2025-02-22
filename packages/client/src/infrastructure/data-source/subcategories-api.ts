import { HTTPClient } from "../../core";
import { SubCategoriesDataSourceI, SubCategoryEntity } from "../../domain";

export class SubCategoriesApiDataSource implements SubCategoriesDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getSubCategories(): Promise<SubCategoryEntity[]> {
        try {
            const response = await this.httpClient.get("/subcategories/get-all");

            return response;
        }
        catch (error) {
            throw new Error("Error obteniendo las categorías: " + error);
        }

    }

    public async createSubCategory(name: string): Promise<void> {
        try {
            await this.httpClient.post("/subcategories/create", { name });
        }
        catch (error) {
            throw new Error("Error creando la categoría: " + error);
        }
    }

    public async deleteSubCategory(name: string): Promise<void> {
        try {
            await this.httpClient.delete("/subcategories/delete", { name });
        }
        catch (error) {
            throw new Error("Error eliminando la categoría: " + error);
        }
    }

}