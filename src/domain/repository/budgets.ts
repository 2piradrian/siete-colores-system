import { Budget } from "../types/budget";

export abstract class BudgetsRepositoryI {
    abstract getBudgets(): Promise<Budget[]>;
    abstract getBudget(id: string): Promise<Budget>;
    abstract createBudget(budget: Budget): Promise<void>;
    abstract deleteBudget(id: string): Promise<void>;
}