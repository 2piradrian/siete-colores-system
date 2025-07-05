import { SubCategoryModel } from "../../data";
import { SubCategoryDataSource, SubCategoryEntity } from "../../domain";

export class MongoSubCategoryDataSource implements SubCategoryDataSource {

    public async getAll(): Promise<SubCategoryEntity[]> {
        try {
            const categories = await SubCategoryModel.find().sort({ name: 1 }) || [];

            return categories.map(subcategory => SubCategoryEntity.fromObject(subcategory));
        }
        catch(error){
            throw error;
        }
    }

    public async create(subcategory: SubCategoryEntity): Promise<SubCategoryEntity> {
        try {
            const subcategoryModel = new SubCategoryModel(subcategory);
            await subcategoryModel.save();

            return SubCategoryEntity.fromObject(subcategoryModel);
        }
        catch(error){
            throw error;
        }
    }

    public async delete(name: string): Promise<void> {
        try {
            await SubCategoryModel.deleteOne({ name });

            return;
        }
        catch(error){
            throw error;
        }
    }
    
}