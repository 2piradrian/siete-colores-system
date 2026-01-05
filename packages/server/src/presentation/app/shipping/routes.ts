import { Router } from 'express';
import { SecretValidator } from '../../middleware/secret';
import { ShippingController } from './controller';
import { ShippingService } from './service';

export class ShippingRoutes {
    static get routes(): Router {

        const router = Router();
        const service = new ShippingService();
        const controller = new ShippingController(service);

        router.get("/get", controller.get);

        router.post("/update", [SecretValidator.validate], controller.update);

        return router;
    }
}
