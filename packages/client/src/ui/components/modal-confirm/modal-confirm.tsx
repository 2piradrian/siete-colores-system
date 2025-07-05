import DestructiveButton from "../destructive-button/destructive-button";
import MainButton from "../main-button/main-button";
import style from "./style.module.css";

type Props = {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ModalConfirm({ message, onConfirm, onCancel }: Props) {
    return (
        <div className={style.backdrop}>
            <div className={style.modal}>
                <p className={style.message}>{message}</p>
                <div className={style.buttons}>
                    <DestructiveButton text="Cancelar" type="button" onClick={onCancel} />
                    <MainButton text="Confirmar" type="button" onClick={onConfirm} />
                </div>
            </div>
        </div>
    );
}
