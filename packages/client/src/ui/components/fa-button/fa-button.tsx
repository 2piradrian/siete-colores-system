import style from "./style.module.css";

type Props = {
    onClick: () => void;
    content: any;
}

export default function FAButton({content, onClick}: Props){
    return (
        <div className={style.container} onClick={onClick}>
			{content}
		</div>
    )
}