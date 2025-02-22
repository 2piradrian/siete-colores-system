import { HTTPClient } from "../../core";
import { BudgetEntity, BudgetsDataSourceI } from "../../domain";

export class BudgetsApiDataSource implements BudgetsDataSourceI {
    
    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getBudgets(): Promise<BudgetEntity[]> {
        try {
            return await this.httpClient.get("/budgets/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo los presupuestos: " + error);
        }

    }

    public async getBudget(id: string): Promise<BudgetEntity> {
        try {
            return await this.httpClient.get("/budgets/get-by-id", { id: id});
        }
        catch (error) {
            throw new Error("Error buscando el presupuesto: " + error);
        }
    }

    public async createBudget(budget: BudgetEntity): Promise<void> {
        try {
            await this.httpClient.post("/budgets/create", budget);
        }
        catch (error) {
            throw new Error("Error creando el presupuesto: " + error);
        }
    }

    public async deleteBudget(id: string): Promise<void> {
        try {
            await this.httpClient.delete("/budgets/delete", { id: id });
        }
        catch (error) {
            throw new Error("Error eliminando el presupuesto: " + error);
        }
    }

}