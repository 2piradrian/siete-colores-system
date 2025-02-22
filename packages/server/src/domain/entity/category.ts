export class CategoryEntity {
    private constructor(
        public id: string,
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): CategoryEntity {
        const { _id, id, name } = object;

        return new CategoryEntity(
            _id || id,
            name,
        );
    }
}