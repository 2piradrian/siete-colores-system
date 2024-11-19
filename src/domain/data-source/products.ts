import { Product } from "../types/product";

export abstract class ProductsDataSourceI {
    abstract getProducts(): Promise<Product[]>;
    abstract getProductByCode(code: string): Promise<Product>;
    abstract createProduct(product: Product): Promise<void>;
    abstract updateProduct(product: Product): Promise<void>;
    abstract deleteProduct(code: string): Promise<void>;
    abstract updateProductPrices(serie: string, percent: number): Promise<void>;
}