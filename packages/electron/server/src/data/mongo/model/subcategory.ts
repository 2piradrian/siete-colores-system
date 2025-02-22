import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export const SubCategoryModel = mongoose.model("SubCategory", subCategorySchema);