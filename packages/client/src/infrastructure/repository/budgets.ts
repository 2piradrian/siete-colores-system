import { BudgetEntity, BudgetsDataSourceI, BudgetsRepositoryI } from "../../domain";
import { BudgetsApiDataSource } from "../data-source/budgets-api";

export class BudgetsRepository implements BudgetsRepositoryI {

    private dataSource: BudgetsDataSourceI;

    constructor(dataSource: BudgetsDataSourceI = new BudgetsApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getBudgets(): Promise<BudgetEntity[]> {
        try {
            return await this.dataSource.getBudgets();
        }
        catch (error) {
            throw error;
        }
    }

    public async getBudget(id: string): Promise<BudgetEntity> {
        try {
            return await this.dataSource.getBudget(id);
        }
        catch (error) {
            throw error;
        }
    }

    public async createBudget(budget: BudgetEntity): Promise<void> {
        try {
            await this.dataSource.createBudget(budget);
        }
        catch (error) {
            throw error;
        }
    }

    public async deleteBudget(id: string): Promise<void> {
        try {
            await this.dataSource.deleteBudget(id);
        }
        catch (error) {
            throw error;
        }
    }

}