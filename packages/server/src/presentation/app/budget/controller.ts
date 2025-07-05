import { Request, Response } from "express";
import { BudgetService } from "./service";
import { CreateBudgetDTO, DeleteBudgetDTO, ErrorHandler, GetBudgetByIdDTO } from "../../../domain";

export class BudgetController {
    constructor(
        private readonly budgetService: BudgetService
    ){}

    getAll = (req: Request, res: Response) => {
        this.budgetService.getAll()
        .then((budgets) => res.status(200).json(budgets))
        .catch(error => ErrorHandler.handle(error, res));
    }

    getById = (req: Request, res: Response) => {
        const [error, dto] = GetBudgetByIdDTO.create(req.query);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.budgetService.getById(dto!)
        .then((budget) => res.status(200).json(budget))
        .catch(error => ErrorHandler.handle(error, res));
    }

    create = (req: Request, res: Response) => {
        const [error, dto] = CreateBudgetDTO.create(req.body);

        if (error) {
             return ErrorHandler.handle(error, res);
        }

        this.budgetService.create(dto!)
        .then(() => res.status(201).send())
        .catch(error => ErrorHandler.handle(error, res));
    }

    delete = (req: Request, res: Response) => {
        const [error, dto] = DeleteBudgetDTO.create(req.query);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.budgetService.delete(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }

    deleteOlderThan = (req: Request, res: Response) => {
        this.budgetService.deleteOlderThan()
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }
}