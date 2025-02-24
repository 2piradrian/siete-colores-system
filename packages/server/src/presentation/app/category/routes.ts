import { Router } from 'express';
import { SecretValidator } from '../../middleware/secret';
import { CategoryService } from './service';
import { CategoryController } from './controller';

export class CategoryRoutes {
    static get routes(): Router {

        const router = Router();
        const service = new CategoryService();
        const controller = new CategoryController(service);

        router.get("/get-all", controller.getAll);

        router.post("/create", [SecretValidator.validate], controller.create );

        router.delete("/delete", [SecretValidator.validate], controller.delete);
        
        return router;
    }
}