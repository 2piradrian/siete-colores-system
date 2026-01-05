import { ShippingEntity } from "../entity/shipping";

export abstract class ShippingDataSourceI {
    public abstract get(): Promise<ShippingEntity>
    public abstract update(value: number): Promise<ShippingEntity>
}