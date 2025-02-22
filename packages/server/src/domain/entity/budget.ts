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
        const { _id, id, products, client, date, subtotal, discount, total } = object;

        return new BudgetEntity(
            _id || id,
            products,
            client,
            subtotal,
            discount,
            total,
            date,
        );
    }
}