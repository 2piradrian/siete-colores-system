import { ShippingDataSourceI, ShippingEntity, ShippingRepositoryI } from "../../domain";
import { ShippingApiDataSource } from "../data-source/shipping-api";

export class ShippingRepository implements ShippingRepositoryI {
    private dataSource: ShippingDataSourceI;

    constructor(dataSource: ShippingDataSourceI = new ShippingApiDataSource()) {
        this.dataSource = dataSource;
    }

    public get(): Promise<ShippingEntity> {
        return this.dataSource.get();
    }

    public update(value: number): Promise<ShippingEntity> {
        return this.dataSource.update(value);
    }
}