import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class DeleteSubCategoryDTO {
    private constructor (
        public name: string,
    ){}

    static create(data: {[key: string]: any}): [string?, DeleteSubCategoryDTO?] {
        Sanitizer.trimStrings(data);

        if(!TypeChecker.areDefined([data.name])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.name])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new DeleteSubCategoryDTO(data.name)];
    }
}