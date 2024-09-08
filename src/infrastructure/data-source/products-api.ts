import { HTTPClient } from "../../core";
import { Product, ProductsDataSourceI } from "../../domain";

export class ProductsApiDataSource implements ProductsDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getProducts(): Promise<Product[]> {
        try {
            const response = await this.httpClient.get("/products/get-all");

            return response;
        }
        catch (error) {
            throw new Error("Error obteniendo los productos: " + error);
        }

    }

    public async getProductByCode(code: string): Promise<Product> {
        try {
            const response = await this.httpClient.get("/products/get-by-code", { code: code });

            return response;
        }
        catch (error) {
            throw new Error("Error buscando el producto: " + error);
        }
    }

    public async createProduct(product: Product): Promise<void> {
        try {
            await this.httpClient.post("/products/create", product);
        }
        catch (error) {
            throw new Error("Error creando el producto: " + error);
        }
    }

    public async updateProduct(product: Product): Promise<void> {
        try {
            await this.httpClient.put("/products/update", product);
        }
        catch (error) {
            throw new Error("Error actualizando el producto: " + error);
        }
    }

    public async deleteProduct(id: string): Promise<void> {
        try {
            await this.httpClient.delete("/products/delete", { id: id });
        }
        catch (error) {
            throw new Error("Error eliminando el producto: " + error);
        }
    }

    public async updateProductPrices(serie: string, percent: number): Promise<void> {
        try {
            await this.httpClient.put("/products/update-prices", { serie: serie, percent: percent });
        }
        catch (error) {
            throw new Error("Error actualizando los precios: " + error);
        }
    }

}