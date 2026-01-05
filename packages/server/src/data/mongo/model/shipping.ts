import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
    branch: {
        type: Number,
        required: true,
        default: 0
    },
    home: {
        type: Number,
        required: true,
        default: 0
    },
});

export const ShippingModel = mongoose.model("Shipping", shippingSchema);