import { Request, Response } from "express";
import { StatisticsService } from "./service";
import { ErrorHandler } from "../../../domain";

export class StatisticsController {
    constructor(
        private readonly statisticsService: StatisticsService
    ) {}

    getStatistics = (req: Request, res: Response) => {
        this.statisticsService.getStatistics()
        .then((statistics) => res.status(200).json(statistics))
        .catch(error => ErrorHandler.handle(error, res));
  }
}