import TableHeader from "../table-header/table-header";
import TableRow from "../table-row/table-row";
import style from "./style.module.css";

type Props = {
	content: any[];
	table: string[][];
	onClick: (row: any) => void;
};

/* The div with classname 'table' is not here because it's not used for all tables */
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
						onClick={() => onClick(content)} 
						key={row.code || row.id || JSON.stringify(row)} 
					/>
				))}
			</tbody>
		</table>
	);
}