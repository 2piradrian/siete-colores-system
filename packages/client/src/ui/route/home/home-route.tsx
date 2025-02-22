import { AppLayout, ContainerLayout } from "../../layout";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";
import { StatisticsData } from "../../components/statistics-card/statistics-data";
import { StatisticsList } from "../../components/statistics-card/statistics-list";

export default function HomeRoute() {

  const { loading, statistics, getMonth } = useViewModel();

  return (
    <AppLayout>
        <ContainerLayout title="Estadísticas" scrollable={false}>
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
            )}
		      </section>
        </ContainerLayout>
    </AppLayout>
  );
};