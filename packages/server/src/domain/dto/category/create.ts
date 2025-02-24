import { TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class CreateCategoryDTO {
    private constructor(
        public name: string
    ){}

    static create(data: {[key: string]: any}): [string?, CreateCategoryDTO?] {

        if (!TypeChecker.areDefined([data.name])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.name])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new CreateCategoryDTO(data.name)];
    }
}