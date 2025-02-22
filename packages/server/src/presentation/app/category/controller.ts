import { Request, Response } from "express";
import { CreateCategoryDTO, ErrorHandler } from "../../../domain";
import { CategoryService } from "./service";
import { request } from "http";

export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ){}

    getAll = (req: Request, res: Response) => {
        this.categoryService.getAll()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, res));
    }

    create = (req: Request, res: Response) => {
        const [error, dto] = CreateCategoryDTO.create(req.body);
        
        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.categoryService.create(dto!)
        .then((category) => res.status(201).json(category))
        .catch(error => ErrorHandler.handle(error, res));
    }

    delete = (req: Request, res: Response) => {
        const [error, dto] = CreateCategoryDTO.create(req.query);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.categoryService.delete(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }
}