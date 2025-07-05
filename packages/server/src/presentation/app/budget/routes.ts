import { Router } from "express"
import { BudgetService } from "./service"
import { BudgetController } from "./controller"
import { SecretValidator } from "../../middleware/secret"

export class BudgetRoutes {
    static get routes(): Router {
        const router = Router()
        const service = new BudgetService()
        const controller = new BudgetController(service)

        router.get("/get-all", [SecretValidator.validate], controller.getAll)
        router.get("/get-by-id", [SecretValidator.validate], controller.getById)

        router.post("/create", [SecretValidator.validate], controller.create)

        router.delete("/delete", [SecretValidator.validate], controller.delete)
        router.delete("/delete-older-than", [SecretValidator.validate], controller.deleteOlderThan)

        return router
    }
}