import { CategoryEntity, CreateCategoryDTO, DeleteCategoryDTO, ErrorType, ProductEntity } from "../../../domain";
import { CategoryRepository_I, ProductRepository_I } from "../../../infrastructure"

export class CategoryService {
    constructor(
        private readonly categoryRepository = new CategoryRepository_I(),
        private readonly productRepository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.categoryRepository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async create(dto: CreateCategoryDTO) {
        try {
            const categories = await this.categoryRepository.getAll();

            for (const category of categories) {
                if (category.name === dto.name) {
                    throw new Error(ErrorType.AlreadyExists); 
                }
            }

            const category = CategoryEntity.fromObject(dto);
            return await this.categoryRepository.create(category);
        }
        catch(error){
            throw error
        }
    }

    public async delete(dto: DeleteCategoryDTO) {
        try {
            const categories = await this.categoryRepository.getAll();

            let exists = false;
            for (const category of categories) {
                if (category.name === dto.name) {
                    exists = true;
                }
            }
            if (!exists) {
                throw new Error(ErrorType.NotFound);
            }

            const products = await this.productRepository.getAll();
            if (products.length > 0) {
                for (const product of products) {
                    if (product.category === dto.name) {
                        throw new Error(ErrorType.IsBeingUsed);
                    }
                }
            }
            
            return await this.categoryRepository.delete(dto.name);
        }
        catch(error){
            throw error
        }
    }
}