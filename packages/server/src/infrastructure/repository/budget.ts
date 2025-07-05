import { BudgetEntity, BudgetRepository } from "../../domain";
import { MongoBudgetDataSource } from "../data-source/mongo-budget";

export class BudgetRepository_I implements BudgetRepository {
    private dataSource: MongoBudgetDataSource;

    constructor() {
        this.dataSource = new MongoBudgetDataSource();
    }

    public getAll(): Promise<BudgetEntity[] | []> {
        return this.dataSource.getAll();
    }

    public getById(id: string): Promise<BudgetEntity | undefined> {
        return this.dataSource.getById(id);
    }

    public create(budget: BudgetEntity): Promise<BudgetEntity> {
        return this.dataSource.create(budget);
    }

    public delete(id: string): Promise<void> {
        return this.dataSource.delete(id);
    }

    public deleteOlderThan(olderThan: Date): Promise<void> {
        return this.dataSource.deleteOlderThan(olderThan);
    }

}