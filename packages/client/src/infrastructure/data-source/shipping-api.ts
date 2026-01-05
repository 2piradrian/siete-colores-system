import { HTTPClient } from "../../core";
import { ShippingDataSourceI, ShippingEntity } from "../../domain";

export class ShippingApiDataSource implements ShippingDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    }

    public async get(): Promise<ShippingEntity> {
        try {
            const data = await this.httpClient.get("/shipping/get");
            return ShippingEntity.fromObject(data);
        }
        catch (error) {
            throw new Error("Error obteniendo el precio de envío: " + error);
        }
    }

    public async update(branch: number, home: number): Promise<ShippingEntity> {
        try {
            const data = await this.httpClient.post("/shipping/update", { branch, home });
            return ShippingEntity.fromObject(data);
        }
        catch (error) {
            throw new Error("Error actualizando el precio de envío: " + error);
        }
    }
}
