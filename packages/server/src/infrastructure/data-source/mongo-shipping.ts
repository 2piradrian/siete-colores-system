import { ShippingModel } from "../../data";
import { ShippingDataSource, ShippingEntity } from "../../domain";

export class MongoShippingDataSource implements ShippingDataSource {

    public async get(): Promise<ShippingEntity> {
        try {
            let shipping = await ShippingModel.findOne();
            
            if (!shipping) {
                shipping = new ShippingModel({ value: 0 });
                await shipping.save();
            }

            return ShippingEntity.fromObject(shipping);
        }
        catch(error){
            throw error;
        }
    }

    public async update(value: number): Promise<ShippingEntity> {
        try {
            let shipping = await ShippingModel.findOne();
            
            if (!shipping) {
                shipping = new ShippingModel({ value });
            } else {
                shipping.value = value;
            }
            
            await shipping.save();

            return ShippingEntity.fromObject(shipping);
        }
        catch(error){
            throw error;
        }
    }
    
}
