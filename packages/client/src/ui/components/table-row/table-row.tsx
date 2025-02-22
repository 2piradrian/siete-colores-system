import style from "./style.module.css";

type Props = {
    content: (any)[];
    onClick: () => void;
};

export default function TableRow({ content, onClick }: Props) {
    return (
        <tr className={style.tableRow} onClick={onClick}>
            {content.map((cell, index) => (
                <td className={style.tableCell} key={index}>{cell}</td>
            ))}
        </tr>
    );
}