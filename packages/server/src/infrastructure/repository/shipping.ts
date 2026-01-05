import { ShippingEntity, ShippingRepository } from "../../domain";
import { MongoShippingDataSource } from "../data-source/mongo-shipping";

export class ShippingRepository_I implements ShippingRepository {
    private dataSource: MongoShippingDataSource;

    constructor() {
        this.dataSource = new MongoShippingDataSource();
    }

    public get(): Promise<ShippingEntity> {
        return this.dataSource.get();
    }

    public update(branch: number, home: number): Promise<ShippingEntity> {
        return this.dataSource.update(branch, home);
    }

}