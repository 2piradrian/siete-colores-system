import { Request, Response } from "express";
import { CreateCategoryDTO, ErrorHandler } from "../../../domain";
import { SubCategoryService } from "./service";

export class SubCategoryController {
    constructor(
        private readonly subCategoryService: SubCategoryService,
    ){}

    getAll = (req: Request, res: Response) => {
        this.subCategoryService.getAll()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, res));
    }

    create = (req: Request, res: Response) => {
        const [error, dto] = CreateCategoryDTO.create(req.body);
        
        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.subCategoryService.create(dto!)
        .then((category) => res.status(201).json(category))
        .catch(error => ErrorHandler.handle(error, res));
    }

    delete = (req: Request, res: Response) => {
        const [error, dto] = CreateCategoryDTO.create(req.query);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.subCategoryService.delete(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }
}