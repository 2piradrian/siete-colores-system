export class BudgetProductEntity {
    private constructor(
        public code: string,
        public name: string,
        public quantity: number,
        public price: number,
        public quantityPrice: number
    ){}

    static fromObject(object: {[key: string]: any}): BudgetProductEntity {
        const { code, name, quantity, price, quantityPrice } = object;

        return new BudgetProductEntity(
            code,
            name,
            quantity,
            price,
            quantityPrice
        );
    }
}