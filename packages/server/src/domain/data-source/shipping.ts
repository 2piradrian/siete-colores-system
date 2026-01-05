import { ShippingEntity } from "../entity/shipping";

export abstract class ShippingDataSource {
    public abstract get(): Promise<ShippingEntity>
    public abstract update(value: number): Promise<ShippingEntity>
}
