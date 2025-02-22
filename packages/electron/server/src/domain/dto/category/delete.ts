import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class DeleteCategoryDTO {
    private constructor (
        public name: string,
    ){}

    static create(data: {[key: string]: any}): [string?, DeleteCategoryDTO?] {
        Sanitizer.trimStrings(data);

        if(!TypeChecker.areDefined([data.name])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.name])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new DeleteCategoryDTO(data.name)];
    }
}