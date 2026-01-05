import { AppLayout, ContainerLayout } from "../../layout";
import InputLabel from "../../components/input-label/input-label";
import MainButton from "../../components/main-button/main-button";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export function ShippingRoute() {
    const { loading, shippingValue, updateShipping } = useViewModel();

    return (
        <AppLayout>
            <ContainerLayout title="Envíos" scrollable={true}>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <div className={style.container}>
                        <form onSubmit={updateShipping} className={style.form}>
                            <InputLabel
                                label="Precio de envío"
                                type="number"
                                placeholder="Ej: 500"
                                id="value"
                                required={true}
                                value={shippingValue.toString()}
                            />
                            <div className={style.buttonContainer}>
                                <MainButton text="Actualizar" type="submit" />
                            </div>
                        </form>
                    </div>
                )}
            </ContainerLayout>
        </AppLayout>
    );
}
