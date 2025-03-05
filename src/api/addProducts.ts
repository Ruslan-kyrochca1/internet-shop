import { ProductType } from "../types/types";

export async function addProducts(){ 
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data)
    return data as ProductType[] //Возвращаемый массив имеет тип Product
}