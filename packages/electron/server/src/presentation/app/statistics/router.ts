import { Router } from 'express';
import { StatisticsController } from './controller';
import { StatisticsService } from './service';

export class StatisticsRoutes {
    static get routes() {

        const router = Router();
        const service = new StatisticsService();
        const controller = new StatisticsController(service);

        router.get('/', controller.getStatistics);

        return router;
    }
}