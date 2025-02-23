import TableHeader from "../table-header/table-header";
import TableRow from "../table-row/table-row";
import style from "./style.module.css";

type Props = {
	content: any[];
	table: string[][];
	onClick: (id: string) => void;
};

export default function Table({ content, onClick, table }: Props) {
	
	return (
		<table className={style.table}>
			<TableHeader params={table[0]} />
			<tbody>
				{content.map((row) => (
					<TableRow 
						content={
							table[1].map((param) => row[param])
						} 
						onClick={() => onClick(row.code || row.id)} 
						key={row.code || row.id} 
					/>
				))}
			</tbody>
		</table>
	);
}