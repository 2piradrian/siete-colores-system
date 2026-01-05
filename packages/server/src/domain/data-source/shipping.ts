import { ShippingEntity } from "../entity/shipping";

export abstract class ShippingDataSource {
    public abstract get(): Promise<ShippingEntity>
    public abstract update(branch: number, home: number): Promise<ShippingEntity>
}