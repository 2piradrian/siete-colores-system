import { Statistics } from "../types/statistics";

export abstract class StatisticsRepositoryI {
    abstract getStatistics(): Promise<Statistics>;
}