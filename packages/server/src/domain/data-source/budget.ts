import { BudgetEntity } from "../entity/budget";

export abstract class BudgetDataSource {
    // --- ---
    public abstract getAll(): Promise<BudgetEntity[]>
    public abstract getById(id: string): Promise<BudgetEntity | undefined>
    // --- ---
    public abstract create(budget: BudgetEntity): Promise<BudgetEntity>
    // --- ---
    public abstract delete(code: string): Promise<void>
    // --- ---
}