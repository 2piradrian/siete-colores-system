import { ProductEntity } from "../entity/product";

export abstract class ProductDataSource {
    public abstract getAll(): Promise<ProductEntity[]>
    public abstract getByCode(code: string): Promise<ProductEntity | undefined>
    public abstract getByCodes(codes: string[]): Promise<ProductEntity[]>
    public abstract getBySeries(series: string): Promise<ProductEntity[] | undefined>
    public abstract create(product: ProductEntity): Promise<ProductEntity>
    public abstract update(product: ProductEntity): Promise<ProductEntity>
    public abstract updateList(productList: ProductEntity[]): Promise<ProductEntity[]>
    public abstract delete(code: string): Promise<void>
}