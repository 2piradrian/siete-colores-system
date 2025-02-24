import { MongoDatabase, ProductModel } from "../data";

async function editDocuments() {
    try {
        const mongo = new MongoDatabase();
        await mongo.connect();

        const result = await ProductModel.updateMany(
            { stock: { $exists: true } },
            { $unset: { stock: "" } }
        );

        console.log("Se han actualizado", result.modifiedCount, "documentos");

        const removeStockResult = await ProductModel.updateMany(
            { stock: { $ne: null } },
            { $unset: { stock: "" } }
        );
        console.log("Se han eliminado", removeStockResult.modifiedCount, "campos 'stock'.");

    }
    catch (error) {
        console.error("Error durante la migración:", error);
    }
}

editDocuments();
