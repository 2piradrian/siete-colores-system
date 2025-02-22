import { BudgetProductEntity } from "./budget-product";

export class BudgetEntity {
    private constructor(
        public id: string,
        public products: BudgetProductEntity[],
        public client: string,
        public subtotal: number,
        public discount: number,
        public total: number,
        public date: Date,
    ) {}

    static fromObject(object: {[key: string]: any}): BudgetEntity {
        return new BudgetEntity(
            object._id || object.id,
            object.products,
            object.client,
            object.subtotal,
            object.discount,
            object.total,
            object.date,
        );
    }
}