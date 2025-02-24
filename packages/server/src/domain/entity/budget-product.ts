export class BudgetProductEntity {
    private constructor(
        public code: string,
        public name: string,
        public quantity: number,
        public price: number,
        public quantityPrice: number
    ){}

    static fromObject(object: {[key: string]: any}): BudgetProductEntity {
        return new BudgetProductEntity(
            object.code,
            object.name,
            object.quantity,
            object.price,
            object.quantityPrice
        );
    }
}