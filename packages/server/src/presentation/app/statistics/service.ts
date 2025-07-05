import { BudgetEntity } from "../../../domain";
import { BudgetRepository_I } from "../../../infrastructure";

export class StatisticsService {
    constructor(
        private readonly budgetRepository = new BudgetRepository_I()
    ) {}

    private getQuantity(budgets: BudgetEntity[]){
        return budgets.reduce(
            (acc, budget) => acc + budget.products.reduce(
                (acc, product) => acc + product.quantity, 0
            ), 0
        );
    }

    private getMostSelled(budgets: BudgetEntity[]) {
        const productQuantities = budgets.reduce((acc: Record<string, number>, budget) => {
            budget.products.forEach(product => {
                acc[product.code] = (acc[product.code] || 0) + product.quantity;
            });
            return acc;
        }, {});

        let maxProduct = null;
        let maxQuantity = 0;

        for (const [code, quantity] of Object.entries(productQuantities)) {
            if (quantity > maxQuantity) {
                maxQuantity = quantity;
                maxProduct = code;
            }
        }

        return maxProduct;
    }


    private getTop(budgets: BudgetEntity[]){
        return budgets.reduce(
            (acc: { code: string, quantity: number }[], budget) => {
                budget.products.forEach(product => {
                    const index = acc.findIndex(p => p.code === product.code);
                    if (index === -1) {
                        acc.push({ code: product.code, quantity: product.quantity })
                    } else {
                        acc[index].quantity += product.quantity
                    }
                });
                return acc
            }, []
        ).sort((a, b) => b.quantity - a.quantity).slice(0, 5);
    }

    public async getStatistics(){
        try {
            const budgets = await this.budgetRepository.getAll();

            if (!budgets || !budgets.length) {
                return {
                    monthQuantity: 0,
                    yearQuantity: 0,
                    mostSelledOnMonth: null,
                    mostSelledOnYear: null,
                    monthTop: null,
                    yearTop: null
                }
            }

            const month = new Date().getMonth();
            const year = new Date().getFullYear();

            const monthBudgets = budgets.filter(budget => budget.date.getMonth() === month);
            const yearBudgets = budgets.filter(budget => budget.date.getFullYear() === year);

            const monthQuantity = this.getQuantity(monthBudgets);
            const yearQuantity = this.getQuantity(yearBudgets);

            const mostSelledOnMonth = this.getMostSelled(monthBudgets);
            const mostSelledOnYear = this.getMostSelled(yearBudgets);

            const monthTop = this.getTop(monthBudgets);
            const yearTop = this.getTop(yearBudgets);

            return {
                monthQuantity,
                yearQuantity,
                mostSelledOnMonth,
                mostSelledOnYear,
                monthTop,
                yearTop
            }
        }
        catch(error){
            throw error
        }
    }
}