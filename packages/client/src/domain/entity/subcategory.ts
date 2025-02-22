export class SubCategoryEntity {
    private constructor(
        public id: string,
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): SubCategoryEntity {
        return new SubCategoryEntity(
            object._id || object.id,
            object.name,
        );
    }
}