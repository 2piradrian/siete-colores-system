import { Request, Response } from "express";
import { ErrorHandler, UpdateShippingDTO } from "../../../domain";
import { ShippingService } from "./service";

export class ShippingController {
    constructor(
        private readonly shippingService: ShippingService,
    ){}

    get = (req: Request, res: Response) => {
        this.shippingService.get()
        .then((shipping) => res.status(200).json(shipping))
        .catch(error => ErrorHandler.handle(error, res));
    }

    update = (req: Request, res: Response) => {
        const [error, dto] = UpdateShippingDTO.create(req.body);
        
        if (error) {
            return ErrorHandler.handle(error, res);
        }

        this.shippingService.update(dto!)
        .then((shipping) => res.status(200).json(shipping))
        .catch(error => ErrorHandler.handle(error, res));
    }
}
