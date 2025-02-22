import { CategoryModel } from "../../data";
import { CategoryDataSource, CategoryEntity } from "../../domain";

export class MongoCategoryDataSource implements CategoryDataSource {

    public async getAll(): Promise<CategoryEntity[]> {
        try {
            const categories = await CategoryModel.find().sort({ name: 1 }) || [];

            return categories.map(category => CategoryEntity.fromObject(category));
        }
        catch(error){
            throw error;
        }
    }

    public async create(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            const categoryModel = new CategoryModel(category);
            await categoryModel.save();

            return CategoryEntity.fromObject(categoryModel);
        }
        catch(error){
            throw error;
        }
    }

    public async delete(name: string): Promise<void> {
        try {
            await CategoryModel.deleteOne({ name });

            return;
        }
        catch(error){
            throw error;
        }
    }
}