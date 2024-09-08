export type Statistics = {
	monthQuantity: number;
    yearQuantity: number;
    mostSelledOnMonth: string;
    mostSelledOnYear: string;
    monthTop: {code: string, quantity: number}[];
    yearTop: {code: string, quantity: number}[];
}