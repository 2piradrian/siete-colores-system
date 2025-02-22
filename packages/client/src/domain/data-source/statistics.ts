import { Statistics } from "../types/statistics";

export abstract class StatisticsDataSourceI {
    abstract getStatistics(): Promise<Statistics>;
}