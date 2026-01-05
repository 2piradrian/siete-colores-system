import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRepositories } from "../../../../core";

export default function useViewModel() {
    const { shippingRepository } = useRepositories();
    const [loading, setLoading] = useState<boolean>(true);
    const [shippingValue, setShippingValue] = useState<number>(0);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            setLoading(true);
            const data = await shippingRepository.get();
            setShippingValue(data.value);
            setLoading(false);
        } 
        catch (error) {
            console.error(error);
            toast.error("Error al cargar el precio de envío");
        }
    };

    const updateShipping = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));
            const value = Number(form.value);

            if (isNaN(value)) {
                toast.error("Valor de envío inválido");
                return;
            }

            await shippingRepository.update(value);
            setShippingValue(value);
            toast.success("Precio de envío actualizado con éxito");
        } 
        catch (error) {
            console.error(error);
            toast.error("Error al actualizar el precio de envío");
        }
    };

    return {
        loading,
        shippingValue,
        updateShipping
    };
}