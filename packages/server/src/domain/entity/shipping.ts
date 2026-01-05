export class ShippingEntity {
    private constructor(
        public id: string,
        public value: number,
    ){}

    static fromObject(object: {[key: string]: any}): ShippingEntity {
        return new ShippingEntity(
            object._id || object.id,
            object.value,
        );
    }
}
