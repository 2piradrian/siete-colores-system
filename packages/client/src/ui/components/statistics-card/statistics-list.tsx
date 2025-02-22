import style from "./style.module.css";

type Props = {
    title: string;
    list?: any[];
};

export default function StatisticsList({title, list}: Props){
    return (
        <div className={style.card}>
            <h3 className={style.h3}>{title}</h3>
            <ul>
                {list?.map((item) => {
                    return (
                        <li key={item.code}>
                            <p>
                                {item.code}: {item.quantity}
                            </p>
                        </li>
                    );
                }) || "No hay top 😿"
                }
            </ul>
        </div>
    )
}