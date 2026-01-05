import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import toast from "react-hot-toast";
import { ShippingEntity } from "../../../../domain";

export default function useViewModel() {
    const { shippingRepository } = useRepositories();
    const [loading, setLoading] = useState<boolean>(true);
    const [shipping, setShipping] = useState<ShippingEntity | undefined>();

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            setLoading(true);
            const data = await shippingRepository.get();
            setShipping(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Error al cargar el precio de envío");
        }
    };

    const updateShipping = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));
            const branch = Number(form.branch);
            const home = Number(form.home);

            if (isNaN(branch) || isNaN(home)) {
                toast.error("Valores de envío inválidos");
                return;
            }

            await shippingRepository.update(branch, home);
            setShipping(ShippingEntity.fromObject({ ...shipping, branch, home }));
            toast.success("Precios de envío actualizados con éxito");
        } catch (error) {
            console.error(error);
            toast.error("Error al actualizar el precio de envío");
        }
    };

    return {
        loading,
        shipping,
        updateShipping
    };
}
