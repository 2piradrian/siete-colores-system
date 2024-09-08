export type BudgetProduct = {
	code: string;
	name: string;
	quantity: number;
	price: number;
	quantityPrice: number;
};

export type Budget = {
	id: string;
	price: number;
	client: string;
	date: Date;
	products: BudgetProduct[];
	subtotal: number;
	discount: number;
	total: number;
};