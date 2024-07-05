import HTTPClient from "../adapters/http-client";
import { Budget } from "../types/types";
import useProducts from "./useProducts";
import { useState } from "react";

export default function useBudget() {
	const httpClient = new HTTPClient();
	const { products } = useProducts();

	const [budgetList, setBudgetList] = useState<Budget[]>([]);
	const [budget, setBudget] = useState<Budget>({ id: "", client: "", price: 0, date: new Date(), products: [], subtotal: 0, discount: 0, total: 0, });

	const getBudgets = async () => {
		try {
			const response = await httpClient.get("/budgets/get-all");

			if (!response) {
				throw new Error("No se han encontrado presupuestos");
			}

			setBudgetList(response || []);
			return response || [];
		} 
		catch (error) {
			alert("Error al cargar los presupuestos: " + error);
		}
	};

	const createBudget = async () => {
		try {
			if (budget.products.length === 0 || !budget.client) {
				throw new Error("No se puede crear un presupuesto sin productos o cliente");
			}
			await httpClient.post("/budgets/create", { products: budget.products, client: budget.client });
			
			alert("Presupuesto creado con éxito");
		}
		catch (error) {
			alert("Error al crear el presupuesto: " + error);
		}
	};

	const getBudget = async (id: string) => {
		try {
			const response = await httpClient.get("/budgets/get-by-id", { id });

			return response;
		}
		catch (error) {
			alert("Error al obtener el presupuesto: " + error);
		}
	};

	const deleteBudget = async (id: string) => {
		try {
			const response = await httpClient.delete("/budgets/delete", { id });
			alert("Presupuesto eliminado con éxito");

			return response;
		}
		catch (error) {
			alert("Error al eliminar el presupuesto" + error);
		}
	};

	const addProduct = (code: string) => {
		const existingProduct = budget.products.find((product) => product.code === code);

		if (existingProduct) {
			// Si el producto ya existe, aumenta su cantidad en 1
			const newProductList = budget.products.map((product) => {
				const newQuantity = product.quantity + 1;

				return product.code === code ? { 
					...product, 
					quantity: newQuantity,
					quantityPrice: (newQuantity) * (product.price) 
				} : product
			});

			setBudget({ ...budget, products: newProductList });
		} 
		else {
			// Si el producto no existe, añádelo con cantidad inicial de 1
			const product = products.find((product) => product.code === code);

			if (!product) {
				return alert("Producto no encontrado");
			}

			const quantityProduct = {
				code: product.code,
				name: product.name,
				quantity: 1,
				price: product.price,
				quantityPrice: product.price,
			};

			setBudget({ ...budget, products: [...budget.products, { ...quantityProduct }] });
		}
	};

	const subtractProduct = (code: string) => {
		const existingProduct = budget.products.find((product) => product.code === code);

		if (!existingProduct) {
			return alert("Producto no encontrado");
		}

		if (existingProduct.quantity === 1) {
			const newProductList = budget.products.filter((product) => product.code !== code);
			setBudget({ ...budget, products: newProductList });
		} 
		else {
			const newProductList = budget.products.map((product) => {
				const newQuantity = product.quantity - 1;

				return product.code === code ? { 
					...product, 
					quantity: newQuantity,
					quantityPrice: (newQuantity) * (product.price) 
				} : product
			});

			setBudget({ ...budget, products: newProductList });
		}
	};

	const getAmount = () => {
		let subtotal = 0;
		let total = 0;
		budget.products.map((product) => {
			subtotal += product.quantityPrice;
		});

		subtotal = parseFloat(subtotal.toFixed(2));
		total = parseFloat((subtotal - (subtotal * (budget.discount / 100))).toFixed(2));

		budget.subtotal = subtotal;
		budget.total = total;
		
		return { subtotal, total };
	};

	const setClientAndDiscount = (client: string, discount: number) => {
		setBudget({ ...budget, client, discount });
	};

	return {
		products,
		budget,
		addProduct,
		subtractProduct,
		getAmount,
		setClientAndDiscount,
		createBudget,
		getBudget,
		getBudgets,
		budgetList,
		deleteBudget,
	};
}
