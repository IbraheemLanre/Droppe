export interface Product{
    id: number;
    userId: number;
    date: Date;
    products: { productId: number, quantity: number }[];
    percentage: number;
    noOfGifts: number;
}