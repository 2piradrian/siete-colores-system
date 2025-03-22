import { useState } from "react";
import { useRepositories } from "../../../../core";
import toast from "react-hot-toast";

export default function useViewModel() {

    const { productsRepository } = useRepositories();

    /* --- States --- */
    const [percent, setPercent] = useState<number>(0);
    const [isButtonAvailable, setIsButtonAvailable] = useState<boolean>(true);
    /* --- ----- --- */

    const calculatePercent = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
		const percentData = Object.fromEntries(new FormData(e.currentTarget));

		if (!percentData.oldPrice || !percentData.newPrice) {
			toast.error("Debes llenar todos los campos");
            return;
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

            if (!serie || !percent) {
                toast.error("Debes llenar todos los campos");
                return Promise.reject();
            }

            setIsButtonAvailable(false);
            toast(`Se actualizarán los precios de la serie ${serie} en un ${percent}%. Por favor, espera un momento, es una tarea pesada.`);
            
            await productsRepository.updateProductPrices(serie, percent);

            toast.success("Precios actualizados correctamente");

            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al crear la categoría");
            return Promise.reject();
        }
        finally {
            setIsButtonAvailable(true);
        }
    }

    return {
        percent,
        calculatePercent,
        updatePrices,
        isButtonAvailable
    };

};