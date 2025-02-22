import { BudgetEntity } from "../entity/budget";

export abstract class BudgetsRepositoryI {
    abstract getBudgets(): Promise<BudgetEntity[]>;
    abstract getBudget(id: string): Promise<BudgetEntity>;
    abstract createBudget(budget: BudgetEntity): Promise<void>;
    abstract deleteBudget(id: string): Promise<void>;
}