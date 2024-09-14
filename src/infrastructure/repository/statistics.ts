import { Statistics, StatisticsDataSourceI, StatisticsRepositoryI } from "../../domain";
import { StatisticsApiDataSource } from "../data-source/statistics-api";

export class StatisticsRepository implements StatisticsRepositoryI {

    private dataSource: StatisticsDataSourceI;

    constructor(dataSource: StatisticsDataSourceI = new StatisticsApiDataSource()){
        this.dataSource = dataSource;
    }

    public async getStatistics(): Promise<Statistics> {
        try {
            return await this.dataSource.getStatistics();
        }
        catch (error) {
            throw error;
        }
    }
    
}