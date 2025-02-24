import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { BudgetEntity, ProductEntity } from "../../../../domain";

export default function useViewModel() {

    const { productsRepository, budgetsRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [budget, setBudget] = useState<BudgetEntity>({ id: "", client: "", date: new Date(), products: [], subtotal: 0, discount: 0, total: 0 });
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

	useEffect(() => {
        const { subtotal, total } = getAmount();
        setBudget({ ...budget, subtotal, total });
	}, [budget.products, budget.discount]);

    const fetch = async () => {
        try {
            setLoading(true);

            const productsFetched = await productsRepository.getProducts() || [];
            setProducts(productsFetched);

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al cargar los productos");
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

    const setClientAndDiscount = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = Object.fromEntries(new FormData(e.currentTarget));

        if (form.discount === "" || form.discount === undefined) {
            form.discount = "0";
        }

        setBudget({
            ...budget,
            client: form.client as string,
            discount: parseFloat(form.discount as string)
        });

        alert("Datos cargados correctamente");
    };

    const createBudget = async (): Promise<void> => {
        try {
			if (budget.client === "") {
				alert("Debes ingresar un cliente");
				return Promise.reject();
			}
            await budgetsRepository.createBudget(budget);
            alert("Presupuesto creado con éxito");
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al crear el presupuesto");
            return Promise.reject();
        }
    }

    const addProduct = (code: string) => {
		const existingProduct = budget.products.find((product) => product.code === code);

		if (existingProduct) {
			// Si el producto ya existe, aumenta su cantidad en 1
			const newProductList = budget.products.map((product) => {
				const newQuantity = product.quantity + 1;

				return product.code === code ? { 
					...product, 
					quantity: newQuantity,
					quantityPrice: (newQuantity) * (product.price),
				} : product
			});

			setBudget({ ...budget, products: newProductList });
		} 
		else {
			// Si el producto no existe, añádelo con cantidad inicial de 1
			const product = products.find((product) => product.code === code);
			if (!product) return alert("Producto no encontrado");

			const finalPrice = product.offertPrice || product.price;
			const quantityProduct = {
				code: product.code,
				name: product.name,
				quantity: 1,
				price: finalPrice,
				quantityPrice: finalPrice,
			};

			setBudget({ ...budget, products: [...budget.products, { ...quantityProduct }] });
		}
	};

	const subtractProduct = (code: string) => {
		const existingProduct = budget.products.find((product) => product.code === code);
		if (!existingProduct) return alert("Producto no encontrado");

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

    return { 
        loading, 
        products,
        budget,
        setClientAndDiscount,
        createBudget,
        addProduct,
        subtractProduct
    };

};