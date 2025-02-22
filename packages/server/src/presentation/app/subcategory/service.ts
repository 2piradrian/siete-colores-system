import { CreateSubCategoryDTO, DeleteSubCategoryDTO, ErrorType, ProductEntity, SubCategoryEntity } from "../../../domain";
import { ProductRepository_I } from "../../../infrastructure";
import { SubCategoryRepository_I } from "../../../infrastructure/repository/subcategory";

export class SubCategoryService {
    constructor(
        private readonly subcategoryRepository = new SubCategoryRepository_I(),
        private readonly productRepository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.subcategoryRepository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async create(dto: CreateSubCategoryDTO) {
        try {
            const subcategories = await this.subcategoryRepository.getAll();

            for (const subcategory of subcategories) {
                if (subcategory.name === dto.name) {
                    throw new Error(ErrorType.AlreadyExists); 
                }
            }

            const subcategory = SubCategoryEntity.fromObject(dto);
            return await this.subcategoryRepository.create(subcategory);
        }
        catch(error){
            throw error
        }
    }

    public async delete(dto: DeleteSubCategoryDTO) {
        try {
            const categories = await this.subcategoryRepository.getAll();

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
                    if (product.subcategories.includes(dto.name)) {
                        throw new Error(ErrorType.IsBeingUsed);
                    }
                }
            }
            
            return await this.subcategoryRepository.delete(dto.name);
        }
        catch(error){
            throw error
        }
    }
}