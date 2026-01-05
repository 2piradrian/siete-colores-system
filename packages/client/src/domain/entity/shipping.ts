export class ShippingEntity {
    private constructor(
        public id: string,
        public branch: number,
        public home: number,
    ){}

    static fromObject(object: {[key: string]: any}): ShippingEntity {
        return new ShippingEntity(
            object._id || object.id,
            object.branch ?? object.value ?? 0,
            object.home ?? 0,
        );
    }
}