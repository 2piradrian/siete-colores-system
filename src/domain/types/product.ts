export type Product = {
	code: string;
	name: string;
	size: string;
	price: number;
	category: string;
	subcategories: string[];
	description: string;
	keywords: string[];
	stock: number | null; // null means infinite
};