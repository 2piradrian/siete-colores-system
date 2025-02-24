import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class CreateBudgetDTO {
    private constructor(
        public products: { code: string, quantity: number}[],
        public client: string,
        public discount: number,
    ){}

    static create(data: {[key: string]: any}): [string?, CreateBudgetDTO?] {
        Sanitizer.trimStrings(data);
        
        if(!TypeChecker.areDefined([data.products, data.client])) {
            return [ErrorType.MissingFields];
        }

        if (data.discount === undefined) {
            data.discount = 0;
        }
        data.discount = parseFloat(data.discount);
        if (!TypeChecker.areNumbers([data.discount])) {
            return [ErrorType.InvalidFields];
        }

        if (!TypeChecker.areStrings([data.client]) || !Array.isArray(data.products)) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new CreateBudgetDTO(data.products, data.client, data.discount)];
    }
}