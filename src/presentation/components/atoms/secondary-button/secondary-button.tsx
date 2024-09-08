import style from "./style.module.css"

type Props = {
    text: string;
    type: "submit" | "button";
    onClick?: () => void;
}

export function SecondaryButton({text, onClick, type}: Props){
    return(
        <button className={style.container} onClick={onClick} type={type}>
            {text}
        </button>
    )
}