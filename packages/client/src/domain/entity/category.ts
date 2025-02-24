export class CategoryEntity {
    private constructor(
        public id: string,
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): CategoryEntity {
        return new CategoryEntity(
            object._id || object.id,
            object.name,
        );
    }
}