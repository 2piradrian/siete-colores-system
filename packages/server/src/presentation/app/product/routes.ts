import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "./service";
import { SecretValidator } from "../../middleware/secret";

export class ProductRoutes {
    static get routes(): Router {
                            
        const router = Router()
        const service = new ProductService()
        const controller = new ProductController(service)

        router.get("/get-all", controller.getAll)
        router.get("/get-by-code", controller.getByCode)

        router.post("/create", [SecretValidator.validate], controller.create)

        router.put("/update", [SecretValidator.validate], controller.update)
        router.put("/update-prices", [SecretValidator.validate], controller.updatePrices)
        
        router.delete("/delete", [SecretValidator.validate], controller.delete)

        return router
    }
}