import style from "./style.module.css";

type Props = {
    onClick: () => void;
    content: string;
}

export function FAButton({content, onClick}: Props){
    return (
        <div className={style.container} onClick={onClick}>
			{content}
		</div>
    )
}