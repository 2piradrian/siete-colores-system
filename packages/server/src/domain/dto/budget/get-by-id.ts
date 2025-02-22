import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class GetBudgetByIdDTO {
    private constructor(
        public id: string,
    ){}

    static create(data: {[key: string]: any}): [string?, GetBudgetByIdDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.id])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.id])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new GetBudgetByIdDTO(data.id)];
    }
}