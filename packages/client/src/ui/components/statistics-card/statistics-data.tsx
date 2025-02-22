import style from "./style.module.css";

type Props = {
    title: string;
    subtitle: string;
    data?: any;
};

export function StatisticsData({ title, subtitle, data }: Props) {
    return (
        <div className={style.card}>
			<h3 className={style.h3}>
                {title}
            </h3>
			<h4 className={style.h4}>
                {subtitle}
            </h4>
			<p>{data || "😿"}</p>
		</div>
    )
}