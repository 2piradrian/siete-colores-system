import { Budget, BudgetsDataSourceI, BudgetsRepositoryI } from "../../domain";
import { BudgetsApiDataSource } from "../data-source/budgets-api";

export class BudgetsRepository implements BudgetsRepositoryI {

    private dataSource: BudgetsDataSourceI;

    constructor(dataSource: BudgetsDataSourceI = new BudgetsApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getBudgets(): Promise<Budget[]> {
        try {
            const response = await this.dataSource.getBudgets();

            return response;
        }
        catch (error) {
            throw error;
        }
    }

    public async getBudget(id: string): Promise<Budget> {
        try {
            const response = await this.dataSource.getBudget(id);

            return response;
        }
        catch (error) {
            throw error;
        }
    }

    public async createBudget(budget: Budget): Promise<void> {
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