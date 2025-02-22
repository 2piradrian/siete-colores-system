import { ProductModel } from "../../data";
import { ErrorType, ProductDataSource, ProductEntity } from "../../domain";

export class MongoProductDataSource implements ProductDataSource {

    public async getAll(): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.find().sort({ code: 1 }) || [];

            return products.map(product => ProductEntity.fromObject(product));
        }
        catch(error){
            throw error
        }
    }

    public async getByCode(code: string): Promise<ProductEntity | undefined> {
        try {
            const product = await ProductModel.findOne({ code });

            if (!product) {
                return undefined;
            }

            return ProductEntity.fromObject(product);
        }
        catch(error){
            throw error
        }
    }

    public async getByCodes(codes: string[]): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.find({ code: { $in: codes } });

            if (!products || !products.length) {
                return [];
            }

            return products.map(product => ProductEntity.fromObject(product));
        }
        catch(error){
            throw error
        }
    }

    public async getBySeries(serie: string): Promise<ProductEntity[] | undefined> {
        try {
            const products = await ProductModel.find({ 
                code: { $regex: new RegExp('^' + serie, 'i') }
            });

            if (!products || !products.length) {
                return undefined;
            }

            return products.map(product => ProductEntity.fromObject(product));
        }
        catch(error){
            throw error
        }
    }

    public async create(product: ProductEntity): Promise<ProductEntity> {
        try {
            const productModel = new ProductModel(product);

            await productModel.save();

            return ProductEntity.fromObject(productModel);
        }
        catch(error){
            throw error
        }
    }

    public async update(product: ProductEntity): Promise<ProductEntity> {
        try {
            const productModel = await ProductModel.findOne({ code: product.code });

            if (!productModel) {
                throw ErrorType.NotFound;
            }

            const productFromDB = ProductEntity.fromObject(productModel);
            const updatedProduct = {
                ...productFromDB, 
                ...product,
                createdAt: productFromDB.createdAt,
            };

            productModel.set(updatedProduct);

            await productModel.save();

            return ProductEntity.fromObject(productModel);
        }
        catch(error){
            throw error
        }
    }

    public async updateList(productList: ProductEntity[]): Promise<ProductEntity[]> {
        try {
            for (const product of productList) {
                await this.update(product);
            }

            return productList;
        }
        catch(error){
            throw error
        }
    }

    public async delete(code: string): Promise<void> {
        try {
            await ProductModel.deleteOne({ code });
        }
        catch(error){
            throw error
        }
    }
}