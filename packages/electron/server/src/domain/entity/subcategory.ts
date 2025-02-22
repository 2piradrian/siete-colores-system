export class SubCategoryEntity {
    private constructor(
        public id: string,
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): SubCategoryEntity {
        const { _id, id, name } = object;

        return new SubCategoryEntity(
            _id || id,
            name,
        );
    }
}