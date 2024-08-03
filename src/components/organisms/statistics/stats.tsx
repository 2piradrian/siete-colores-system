
import useStatistics from "../../../hooks/useStatistics";
import StatisticsData from "../../atoms/statistics-card/statistics-data";
import StatisticsList from "../../atoms/statistics-card/statistics-list";
import style from "./style.module.css";

export default function Stats() {
	const { statistics } = useStatistics();
	
	return (
		<div className={style.stats}>
			<div className={style.statsContainer}>
				<StatisticsData title="Productos" subtitle="vendidos en el mes" data={statistics?.monthQuantity}/>
				<StatisticsData title="Productos" subtitle="vendidos en el año" data={statistics?.yearQuantity}/>
				<StatisticsData title="Producto" subtitle="más vendido en el mes" data={statistics?.mostSelledOnMonth}/>
				<StatisticsData title="Producto" subtitle="más vendido en el año" data={statistics?.mostSelledOnYear}/>
			</div>
			<div className={style.topContainer}>
				<StatisticsList title="Top del mes" list={statistics?.yearTop}/>
				<StatisticsList title="Top del año" list={statistics?.yearTop}/>
			</div>
		</div>
	);
}