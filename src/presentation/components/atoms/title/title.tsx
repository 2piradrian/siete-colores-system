import style from "./style.module.css";

type Props = {
	title: string;
};

export function Title({ title }: Props) {
	return <h1 className={style.title}>{title}</h1>;
}