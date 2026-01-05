import { ShippingModel } from "../../data";
import { ShippingDataSource, ShippingEntity } from "../../domain";

export class MongoShippingDataSource implements ShippingDataSource {

    public async get(): Promise<ShippingEntity> {
        try {
            let shipping = await ShippingModel.findOne();
            
            if (!shipping) {
                shipping = new ShippingModel({ branch: 0, home: 0 });
                await shipping.save();
            }

            return ShippingEntity.fromObject(shipping);
        }
        catch(error){
            throw error;
        }
    }

    public async update(branch: number, home: number): Promise<ShippingEntity> {
        try {
            let shipping = await ShippingModel.findOne();
            
            if (!shipping) {
                shipping = new ShippingModel({ branch, home });
            } else {
                shipping.branch = branch;
                shipping.home = home;
            }
            
            await shipping.save();

            return ShippingEntity.fromObject(shipping);
        }
        catch(error){
            throw error;
        }
    }
    
}