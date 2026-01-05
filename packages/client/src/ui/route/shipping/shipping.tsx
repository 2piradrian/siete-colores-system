import { AppLayout, ContainerLayout } from "../../layout";
import InputLabel from "../../components/input-label/input-label";
import MainButton from "../../components/main-button/main-button";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export function ShippingRoute() {
    const { loading, shipping, updateShipping } = useViewModel();

    return (
        <AppLayout>
            <ContainerLayout title="Configuración de Envío" scrollable={true}>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <div className={style.container}>
                        <form onSubmit={updateShipping} className={style.form}>
                            <InputLabel
                                label="Envío a sucursal"
                                type="number"
                                placeholder="Ej: 5000"
                                id="branch"
                                required={true}
                                value={shipping?.branch.toString()}
                            />
                            <InputLabel
                                label="Envío a domicilio"
                                type="number"
                                placeholder="Ej: 10000"
                                id="home"
                                required={true}
                                value={shipping?.home.toString()}
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