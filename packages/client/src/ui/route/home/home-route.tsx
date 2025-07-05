import { AppLayout, ContainerLayout } from "../../layout";
import StatisticsData from "../../components/statistics-card/statistics-data";
import StatisticsList from "../../components/statistics-card/statistics-list";
import useViewModel from "./viewmodel/useViewModel";
import TopChart from "../../components/charts/top-chart";
import QuantityComparisonChart from "../../components/charts/quantity-comparison-chart";
import style from "./style.module.css";

export default function HomeRoute() {

  const { loading, statistics, getMonth } = useViewModel();

  return (
    <AppLayout>
        <ContainerLayout title="Estadísticas" scrollable={true}>
          <section className={style.container}>
			      <h2 className={style.subtitle}>Estadísticas del mes de {getMonth()}</h2>
            {loading && <div className={style.loading}>Cargando...</div>}
            {!loading && statistics && (
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
			        			<div className={style.verticalCard}>
					  			<TopChart data={statistics.monthTop } />
					  			<StatisticsList title="Top del mes" list={statistics.monthTop} />
							</div>
			        		) : (
							<div className={style.verticalCard}>
			        				<StatisticsData title="Top" subtitle="vendidos en el mes" />
							</div>
			        		)
			        	}
			        	{
			        		statistics?.yearTop?.length != 0 ? (
			        			<div className={style.verticalCard}>
					  			<TopChart data={statistics.yearTop } />
					  			<StatisticsList title="Top del año" list={statistics.yearTop} />
							</div>
			        		) : (
							<div className={style.verticalCard}>
			        				<StatisticsData title="Top" subtitle="vendidos en el año" />
							</div>
			        		)
			        	}
			        </div>
					<div className={style.statsContainer}>
						<div className={style.horizontalCard}>
    					  <QuantityComparisonChart
    					    month={statistics.monthQuantity}
    					    year={statistics.yearQuantity}
    					  />
    					</div>
					</div>
		        </div>
            )}
		      </section>
        </ContainerLayout>
    </AppLayout>
  );
};