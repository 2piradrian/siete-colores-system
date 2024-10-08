import { HTTPClient } from "../../core";
import { CategoriesDataSourceI, Category } from "../../domain";

export class CategoriesApiDataSource implements CategoriesDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getCategories(): Promise<Category[]> {
        try {
            const response = await this.httpClient.get("/categories/get-all");

            return response;
        }
        catch (error) {
            throw new Error("Error obteniendo las categorías: " + error);
        }

    }

    public async createCategory(name: string): Promise<void> {
        try {
            await this.httpClient.post("/categories/create", { name });
        }
        catch (error) {
            throw new Error("Error creando la categoría: " + error);
        }
    }

    public async deleteCategory(name: string): Promise<void> {
        try {
            await this.httpClient.delete("/categories/delete", { name });
        }
        catch (error) {
            throw new Error("Error eliminando la categoría: " + error);
        }
    }

}