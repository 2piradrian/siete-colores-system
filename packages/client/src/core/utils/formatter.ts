export const priceFormatter = (price: number): string => {
    return price.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
};