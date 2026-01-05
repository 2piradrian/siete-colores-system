import { TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class UpdateShippingDTO {
    private constructor(
        public branch: number,
        public home: number,
    ){}

    static create(data: {[key: string]: any}): [string?, UpdateShippingDTO?] {

        if (!TypeChecker.areDefined([data.branch, data.home])) {
            return [ErrorType.MissingFields];
        }

        if (isNaN(Number(data.branch)) || isNaN(Number(data.home))) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new UpdateShippingDTO(Number(data.branch), Number(data.home))];
    }
}