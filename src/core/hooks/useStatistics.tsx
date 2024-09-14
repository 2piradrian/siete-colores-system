import { useEffect, useState } from "react";
import { Statistics } from "../../domain/types/statistics";
import { StatisticsRepository } from "../../infrastructure/repository/statistics";

export function useStatistics() {
	const [statistics, setStatistics] = useState<Statistics | undefined>();

	const statisticsRepository = new StatisticsRepository();

	useEffect(() => {
		fetchStatistics().then((data) => setStatistics(data));
	}, []);

	const fetchStatistics = async () => {
		try {
            return await statisticsRepository.getStatistics();
		} 
		catch (error) {
			alert(error);
		}
	}

	return {
		statistics
	};
}
