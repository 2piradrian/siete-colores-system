import { useEffect, useState } from "react";
import { Statistics } from "../types/types";
import HTTPClient from "../adapters/http-client";

function useStatistics() {
    const httpClient = new HTTPClient();
	const [statistics, setStatistics] = useState<Statistics | undefined>();

	useEffect(() => {
		fetchStatistics().then((data) => setStatistics(data));
	}, []);

	const fetchStatistics = async () => {
		try {
            return await httpClient.get("/statistics");;
		} 
		catch (error) {
			alert("Error al cargar las estadísticas: " + error);
		}
	}

	return {
		statistics
	};
}

export default useStatistics;
