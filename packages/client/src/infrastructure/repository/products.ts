import { ProductsApiDataSource } from './../data-source/products-api';
import { ProductEntity, ProductsDataSourceI, ProductsRepositoryI } from "../../domain";

export class ProductsRepository implements ProductsRepositoryI {

    private dataSource: ProductsDataSourceI;

    constructor(dataSource: ProductsDataSourceI = new ProductsApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getProducts(): Promise<ProductEntity[]> {
        try {
            return await this.dataSource.getProducts();
        }
        catch (error) {
            throw error;
        }
    }

    public async getProductByCode(code: string): Promise<ProductEntity> {
        try {
            return await this.dataSource.getProductByCode(code);
        }
        catch (error) {
            throw error;
        }
    }

    public async createProduct(product: ProductEntity): Promise<void> {
        try {
            await this.dataSource.createProduct(product);
        }
        catch (error) {
            throw error;
        }
    }

    public async updateProduct(product: ProductEntity): Promise<void> {
        try {
            await this.dataSource.updateProduct(product);
        }
        catch (error) {
            throw error;
        }
    }

    public async deleteProduct(code: string): Promise<void> {
        try {
            await this.dataSource.deleteProduct(code);
        }
        catch (error) {
            throw error;
        }
    }

    public async updateProductPrices(serie: string, percent: number): Promise<void> {
        try {
            await this.dataSource.updateProductPrices(serie, percent);
        }
        catch (error) {
            throw error;
        }
    }

}