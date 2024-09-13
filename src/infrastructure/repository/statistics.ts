import { Statistics, StatisticsDataSourceI, StatisticsRepositoryI } from "../../domain";
import { StatisticsApiDataSource } from "../data-source/statistics-api";

export class StatisticsRepository implements StatisticsRepositoryI {

    private dataSource: StatisticsDataSourceI;

    constructor(){
        this.dataSource = new StatisticsApiDataSource();
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