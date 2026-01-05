import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
        default: 0
    },
});

export const ShippingModel = mongoose.model("Shipping", shippingSchema);
