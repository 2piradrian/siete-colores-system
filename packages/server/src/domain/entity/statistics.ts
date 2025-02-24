export class StatisticsEntity {
    private constructor(
        public monthQuantity: number,
        public yearQuantity: number,
        public mostSelledOnMonth: string,
        public mostSelledOnYear: string,
        public monthTop: {code: string, quantity: number}[],
        public yearTop: {code: string, quantity: number}[],
    ){}

    static fromObject(object: {[key: string]: any}): StatisticsEntity {
        return new StatisticsEntity(
            object.monthQuantity,
            object.yearQuantity,
            object.mostSelledOnMonth,
            object.mostSelledOnYear,
            object.monthTop,
            object.yearTop,
        );
    }
}