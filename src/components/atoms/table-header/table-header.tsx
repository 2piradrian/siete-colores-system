import style from "./style.module.css";

type Props = {
    params: string[];
};

export default function TableHeader({params}: Props){
    return (
        <thead className={style.header}>
            <tr>
                {params.map((header, index) => (
                    <th className={style.tableHeader} key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    );
}