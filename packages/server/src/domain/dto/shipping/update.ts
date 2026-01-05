import { TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class UpdateShippingDTO {
    private constructor(
        public value: number
    ){}

    static create(data: {[key: string]: any}): [string?, UpdateShippingDTO?] {

        if (!TypeChecker.areDefined([data.value])) {
            return [ErrorType.MissingFields];
        }

        if (isNaN(Number(data.value))) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new UpdateShippingDTO(Number(data.value))];
    }
}
