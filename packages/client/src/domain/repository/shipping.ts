import { ShippingEntity } from "../entity/shipping";

export abstract class ShippingRepositoryI {
    public abstract get(): Promise<ShippingEntity>
    public abstract update(value: number): Promise<ShippingEntity>
}