import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class GetProductByCodeDTO {
    private constructor(
        public code: string,
    ){}

    static create(data: {[key: string]: any}): [string?, GetProductByCodeDTO?] {
        Sanitizer.trimStrings(data);
        
        if (!TypeChecker.areDefined([data.code])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.code])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new GetProductByCodeDTO(data.code)];
    }
}