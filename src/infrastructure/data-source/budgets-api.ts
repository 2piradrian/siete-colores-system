import { HTTPClient } from "../../core";
import { Budget, BudgetsDataSourceI } from "../../domain";

export class BudgetsApiDataSource implements BudgetsDataSourceI {
    
    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getBudgets(): Promise<Budget[]> {
        try {
            const response = await this.httpClient.get("/budgets/get-all");

            return response;
        }
        catch (error) {
            throw new Error("Error obteniendo los presupuestos: " + error);
        }

    }

    public async getBudget(id: string): Promise<Budget> {
        try {
            const response = await this.httpClient.get("/budgets/get-by-id", { id: id});

            return response;
        }
        catch (error) {
            throw new Error("Error buscando el presupuesto: " + error);
        }
    }

    public async createBudget(budget: Budget): Promise<void> {
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