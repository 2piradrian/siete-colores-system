export const priceFormatter = (price: number): string => {
    return price.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
};

export const dateFormatter = (date: string | Date): string => {
    const parsedDate = typeof date === "string" ? new Date(date) : date;

    return new Intl.DateTimeFormat("es-AR").format(parsedDate);
};