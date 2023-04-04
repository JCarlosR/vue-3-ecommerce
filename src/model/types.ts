export interface Product {
    name: string;
    price: number;
    id: number;
}

export interface CartDetail {
    productId: number;
    quantity: number;
}