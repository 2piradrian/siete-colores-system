import { ProductEntity } from "../entity/product";

export abstract class ProductsRepositoryI {
    abstract getProducts(): Promise<ProductEntity[]>;
    abstract getProductByCode(code: string): Promise<ProductEntity>;
    abstract createProduct(product: ProductEntity): Promise<void>;
    abstract updateProduct(product: ProductEntity): Promise<void>;
    abstract deleteProduct(code: string): Promise<void>;
    abstract updateProductPrices(serie: string, percent: number): Promise<void>;
}