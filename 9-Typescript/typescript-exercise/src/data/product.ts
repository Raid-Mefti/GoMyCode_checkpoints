import { productI } from '../types/product';

export const productList : productI[]=[
    {
    id:1,
    name:"John",
    price:32,
},
    {
    id:1,
    name:"John",
    price:32,
},
    {
    id:1,
    name:"John",
    price:32,
},
]

export function generateProduct():productI{
    return {
        id:Date.now(),
        name:"gfdhdf",
        price:Math.floor(Math.random()*1000)
    }
} 
/* export interface productI{
    id:number,
    name:string,
    price: number
}} */ 