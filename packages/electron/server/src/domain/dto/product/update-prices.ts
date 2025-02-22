import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class UpdatePricesDTO {
    private constructor(
        public serie: string,
        public percent: number,
    ){}

    static create(data: {[key: string]: any}): [string?, UpdatePricesDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.serie, data.percent])) {
            return [ErrorType.MissingFields];
        }

        data.percent = parseFloat(data.percent);
        if (!TypeChecker.areNumbers([data.percent])) {
            return [ErrorType.InvalidFields];
        }

        if (!TypeChecker.areStrings([data.serie])) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new UpdatePricesDTO(data.serie, data.percent)];
    }
}