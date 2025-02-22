import { BudgetModel } from "../../data";
import { BudgetDataSource } from "../../domain/data-source/budget";
import { BudgetEntity } from "../../domain/entity/budget";

export class MongoBudgetDataSource implements BudgetDataSource {
    public async getAll(): Promise<BudgetEntity[]> {
        try {
            const budgets = await BudgetModel.find().sort({ date: 1 }) || [];

            return budgets.map(budget => BudgetEntity.fromObject(budget));
        }
        catch(error){
            throw error
        }
    }

    public async getById(id: string): Promise<BudgetEntity | undefined> {
        try {
            const budget = await BudgetModel.findOne({ _id: id });

            if (!budget) {
                return undefined;
            }

            return BudgetEntity.fromObject(budget);
        }
        catch(error){
            throw error
        }
    }

    public async create(budget: BudgetEntity): Promise<BudgetEntity> {
        try {
            const budgetModel = new BudgetModel(budget);

            await budgetModel.save();

            return BudgetEntity.fromObject(budgetModel);
        }
        catch(error){
            throw error
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            await BudgetModel.deleteOne({ _id: id });
        }
        catch(error){
            throw error
        }
    }
}