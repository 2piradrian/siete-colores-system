import { StatisticsEntity } from "../entity/statistics";

export abstract class StatisticsDataSourceI {
    abstract getStatistics(): Promise<StatisticsEntity>;
}