import { TypeChecker } from "../../../config";
import { Sanitizer } from "../../../config/utils/sanitizer";
import { ErrorType } from "../../error/error-type";

export class DeleteBudgetDTO {
    private constructor(
        public id: string,
    ){}

    static create(data: {[key: string]: any}): [string?, DeleteBudgetDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.id])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.id])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new DeleteBudgetDTO(data.id)];
    }
}