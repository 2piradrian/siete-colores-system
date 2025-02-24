import { useState } from "react";
import { useRepositories } from "../../../../core";

export default function useViewModel() {

    const { productsRepository } = useRepositories();

    /* --- States --- */
    const [percent, setPercent] = useState<number>(0);
    /* --- ----- --- */

    const calculatePercent = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
		const percentData = Object.fromEntries(new FormData(e.currentTarget));

		if (!percentData.oldPrice || !percentData.newPrice) {
			return alert("Debes llenar todos los campos");
		}

		const oldPrice = Number(percentData.oldPrice);
		const newPrice = Number(percentData.newPrice);

		const calculatedPercent = ((newPrice - oldPrice) / oldPrice) * 100;

		const roundedPercent = parseFloat(calculatedPercent.toFixed(2));

		setPercent(roundedPercent);
    };


    const updatePrices = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            
            const form = Object.fromEntries(new FormData(e.currentTarget));

            const serie = String(form.serie);
		    const percent = Number(form.percent);
            
            alert(`Se actualizarán los precios de la serie ${serie} en un ${percent}%. Por favor, espera un momento, es una tarea pesada.`);
            await productsRepository.updateProductPrices(serie, percent);
            
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al crear la categoría");
            return Promise.reject();
        }
    }

    return {
        percent,
        calculatePercent,
        updatePrices
    };

};