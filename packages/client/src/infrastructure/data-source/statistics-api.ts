import { HTTPClient } from '../../core';
import { StatisticsDataSourceI, StatisticsEntity } from '../../domain';

export class StatisticsApiDataSource implements StatisticsDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async getStatistics(): Promise<StatisticsEntity> {
        try {
            return await this.httpClient.get("/statistics");
        }
        catch (error) {
            throw new Error("Error obteniendo las estadísticas: " + error);
        }

    }

}