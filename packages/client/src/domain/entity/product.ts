export class ProductEntity {
    private constructor(
        public id: string,
        public code: string,
        public name: string,
        public price: number,
        public offertPrice: number | undefined,
        public size: string,
        public category: string,
        public subcategories: string[],
        public description: string,
        public keywords: string[],
        public available: boolean,
        public createdAt: Date,
    ){}

    static fromObject(object: {[key: string]: any}): ProductEntity {
        return new ProductEntity(
            object._id || object.id,
            object.code,
            object.name,
            object.price,
            object.offertPrice,
            object.size,
            object.category,
            object.subcategories,
            object.description,
            object.keywords,
            object.available,
            object.createdAt,
        );
    }
}