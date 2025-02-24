import { Router } from 'express';
import { SecretValidator } from '../../middleware/secret';
import { SubCategoryService } from './service';
import { SubCategoryController } from './controller';

export class SubCategoryRoutes {
    static get routes(): Router {

        const router = Router();
        const service = new SubCategoryService();
        const controller = new SubCategoryController(service);

        router.get("/get-all", controller.getAll);

        router.post("/create", [SecretValidator.validate], controller.create );

        router.delete("/delete", [SecretValidator.validate], controller.delete);
        
        return router;
    }
}