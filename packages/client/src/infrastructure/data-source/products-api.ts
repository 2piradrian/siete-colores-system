import { HTTPClient } from "../../core";
import { ProductEntity, ProductsDataSourceI } from "../../domain";

export class ProductsApiDataSource implements ProductsDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getProducts(): Promise<ProductEntity[]> {
        try {
            return await this.httpClient.get("/products/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo los productos: " + error);
        }

    }

    public async getProductByCode(code: string): Promise<ProductEntity> {
        try {
            return await this.httpClient.get("/products/get-by-code", { code: code });
        }
        catch (error) {
            throw new Error("Error buscando el producto: " + error);
        }
    }

    public async createProduct(product: ProductEntity): Promise<void> {
        try {
            await this.httpClient.post("/products/create", product);
        }
        catch (error) {
            throw new Error("Error creando el producto: " + error);
        }
    }

    public async updateProduct(product: ProductEntity): Promise<void> {
        try {
            await this.httpClient.put("/products/update", product);
        }
        catch (error) {
            throw new Error("Error actualizando el producto: " + error);
        }
    }

    public async deleteProduct(code: string): Promise<void> {
        try {
            await this.httpClient.delete("/products/delete", { code: code });
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