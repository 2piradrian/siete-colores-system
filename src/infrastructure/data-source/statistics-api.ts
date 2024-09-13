import { HTTPClient } from '../../core';
import { StatisticsDataSourceI } from '../../domain';
import { Statistics } from './../../domain/types/statistics';

export class StatisticsApiDataSource implements StatisticsDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getStatistics(): Promise<Statistics> {
        try {
            const response = await this.httpClient.get("/statistics");

            return response;
        }
        catch (error) {
            throw new Error("Error obteniendo las estadísticas: " + error);
        }

    }

}