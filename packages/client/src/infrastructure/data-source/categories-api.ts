import { HTTPClient } from "../../core";
import { CategoriesDataSourceI, CategoryEntity } from "../../domain";

export class CategoriesApiDataSource implements CategoriesDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getCategories(): Promise<CategoryEntity[]> {
        try {
            return await this.httpClient.get("/categories/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo las categorías: " + error);
        }

    }

    public async createCategory(category: CategoryEntity): Promise<void> {
        try {
            await this.httpClient.post("/categories/create", category);
        }
        catch (error) {
            throw new Error("Error creando la categoría: " + error);
        }
    }

    public async deleteCategory(category: CategoryEntity): Promise<void> {
        try {
            await this.httpClient.delete("/categories/delete", category);
        }
        catch (error) {
            throw new Error("Error eliminando la categoría: " + error);
        }
    }

}