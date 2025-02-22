import { TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class CreateSubCategoryDTO {
    private constructor(
        public name: string
    ){}

    static create(data: {[key: string]: any}): [string?, CreateSubCategoryDTO?] {

        if (!TypeChecker.areDefined([data.name])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.name])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new CreateSubCategoryDTO(data.name)];
    }
}