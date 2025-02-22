import { Request, Response } from "express";
import { ProductService } from "./service";
import { CreateProductDTO, DeleteProductDTO, ErrorHandler, GetProductByCodeDTO, UpdatePricesDTO, UpdateProductDTO } from "../../../domain";

export class ProductController {
    constructor(
        private readonly productService: ProductService
    ){}

    getAll = (req: Request, res: Response) => {
        this.productService.getAll()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, res));
    }

    getByCode = (req: Request, res: Response) => {
        const [error, dto] = GetProductByCodeDTO.create(req.query);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.productService.getByCode(dto!)
        .then((product) => res.status(200).json(product))
        .catch(error => ErrorHandler.handle(error, res));
    }

    create = (req: Request, res: Response) => {
        const [error, dto] = CreateProductDTO.create(req.body);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.productService.create(dto!)
        .then(() => res.status(201).send())
        .catch(error => ErrorHandler.handle(error, res));
    }

    update = (req: Request, res: Response) => {
        const [error, dto] = UpdateProductDTO.create(req.body);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.productService.update(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }

    updatePrices = (req: Request, res: Response) => {
        const [error, dto] = UpdatePricesDTO.create(req.body);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.productService.updatePrices(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }

    delete = (req: Request, res: Response) => {
        const [error, dto] = DeleteProductDTO.create(req.query);

        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.productService.delete(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, res));
    }

}