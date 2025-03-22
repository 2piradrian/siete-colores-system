import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { StatisticsEntity } from "../../../../domain";
import toast from "react-hot-toast";

export default function useViewModel() {

    const { statisticsRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [statistics, setStatistics] = useState<StatisticsEntity | undefined>();
    /* --- ----- --- */

    useEffect(() => {
		fetch();
	}, []);

    const getMonth = () => {
		return new Intl.DateTimeFormat("es-ES", { month: "long" }).format(new Date());
	};

	const fetch = async () => {
        try {
            setLoading(true);

            const statisticsFetched = await statisticsRepository.getStatistics();
            setStatistics(statisticsFetched);  

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al cargar las estadísticas");
        }
    };

    return {
        loading,
        statistics,
        getMonth,
    };

};