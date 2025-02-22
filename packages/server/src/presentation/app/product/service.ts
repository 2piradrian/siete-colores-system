import { CreateProductDTO, DeleteProductDTO, GetProductByCodeDTO, ProductEntity, UpdatePricesDTO, UpdateProductDTO } from "../../../domain";
import { ProductRepository_I } from "../../../infrastructure";

export class ProductService {
    constructor(
        private readonly repository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.repository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async getByCode(dto: GetProductByCodeDTO) {
        try {
            return await this.repository.getByCode(dto.code);
        }
        catch(error){
            throw error
        }
    }

    public async create(dto: CreateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.repository.create(product);
        }
        catch(error){
            throw error
        }
    }

    public async update(dto: UpdateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.repository.update(product);
        }
        catch(error){
            throw error
        }
    }

    public async updatePrices(dto: UpdatePricesDTO) {
        try {
            const products = await this.repository.getBySeries(dto.serie);

            if (!products || !products.length) {
                return;
            }

            products.forEach(product => {
                product.price = product.price + (product.price * (dto.percent / 100));
                product.price = Math.round(product.price / 10) * 10;
            });

            return await this.repository.updateList(products);

        }
        catch(error){
            throw error
        }
    
    }

    public async delete(dto: DeleteProductDTO) {
        try {
            return await this.repository.delete(dto.code);
        }
        catch(error){
            throw error
        }
    }

}