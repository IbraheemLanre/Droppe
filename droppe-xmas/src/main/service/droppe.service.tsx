import { Product } from "../interface/product.interface";

export const getLists = async (): Promise<Product[]> => await (await fetch('https://fakestoreapi.com/carts?limit=5')).json();



/*export function getList() {
    return fetch('https://fakestoreapi.com/carts?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
}*/