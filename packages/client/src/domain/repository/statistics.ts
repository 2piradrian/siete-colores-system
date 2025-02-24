import { StatisticsEntity } from "../entity/statistics";

export abstract class StatisticsRepositoryI {
    abstract getStatistics(): Promise<StatisticsEntity>;
}