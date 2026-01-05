import { ShippingRepository_I } from "../../../infrastructure"
import { UpdateShippingDTO } from "../../../domain";

export class ShippingService {
    constructor(
        private readonly shippingRepository = new ShippingRepository_I(),
    ){}

    public async get() {
        try {
            return await this.shippingRepository.get();
        }
        catch(error){
            throw error
        }
    }

    public async update(dto: UpdateShippingDTO) {
        try {
            return await this.shippingRepository.update(dto.value);
        }
        catch(error){
            throw error
        }
    }
}
