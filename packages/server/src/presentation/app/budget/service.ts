import { BudgetEntity, BudgetProductEntity, CreateBudgetDTO, DeleteBudgetDTO, ErrorType, GetBudgetByIdDTO } from "../../../domain";
import { BudgetRepository_I, ProductRepository_I } from "../../../infrastructure";

export class BudgetService {
    constructor(
        private readonly productRepository = new ProductRepository_I(),
        private readonly budgetRepository = new BudgetRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.budgetRepository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async getById(dto: GetBudgetByIdDTO) {
        try {
            return await this.budgetRepository.getById(dto.id);
        }
        catch(error){
            throw error
        }
    }

    public async create(dto: CreateBudgetDTO) {
        try {
            const products: BudgetProductEntity[] = [];

            for (const product of dto.products) {
                const productDB = await this.productRepository.getByCode(product.code);

                if (!productDB) {
                    throw new Error(ErrorType.Unknown);
                }

                const finalPrice = productDB.offertPrice || productDB.price;

                const entity = BudgetProductEntity.fromObject({
                    code: product.code,
                    name: productDB.name,
                    quantity: product.quantity,
                    price: finalPrice,
                    quantityPrice: finalPrice * product.quantity
                });

                products.push(entity);
            }

            if (!products || !products.length) {
                throw new Error(ErrorType.Unknown);
            }

            const subtotal = products.reduce((acc, product) => acc + product.quantityPrice, 0);
            const total = subtotal - (subtotal * dto.discount / 100);

            const budget = BudgetEntity.fromObject({
                products: products,
                client: dto.client,
                subtotal: subtotal,
                discount: dto.discount,
                total: total,
                date: new Date(),
            });

            return await this.budgetRepository.create(budget);
        }
        catch(error){
            throw error
        }
    }

    public async delete(dto: DeleteBudgetDTO) {
        try {
            return await this.budgetRepository.delete(dto.id);
        }
        catch(error){
            throw error
        }
    }

    public async deleteOlderThan() {
        try {
            const olderThan = new Date();
            olderThan.setMonth(olderThan.getMonth() - 12); // 18 months ago
            return await this.budgetRepository.deleteOlderThan(olderThan);
        }
        catch(error){
            throw error;
        }
    }

}
