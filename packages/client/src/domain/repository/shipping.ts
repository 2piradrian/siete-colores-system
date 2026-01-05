import { ShippingEntity } from "../entity/shipping";

export abstract class ShippingRepositoryI {
    public abstract get(): Promise<ShippingEntity>
    public abstract update(branch: number, home: number): Promise<ShippingEntity>
}
