import { useStatistics } from "../../../../core";
import { StatisticsData, StatisticsList } from "../../atoms";
import style from "./style.module.css";

export function Stats() {
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
				{
					statistics?.monthTop?.length != 0 ? (
						<StatisticsList title="Top del mes" list={statistics?.monthTop}/>
					) : (
						<StatisticsData title="Top" subtitle="vendidos en el mes" />
					)
				}
				{
					statistics?.yearTop?.length != 0 ? (
						<StatisticsList title="Top del año" list={statistics?.yearTop}/>
					) : (
						<StatisticsData title="Top" subtitle="vendidos en el año" />
					)
				}
			</div>
		</div>
	);
}