import { userI } from '../types/user';


export const userList : userI[]=[
    {
    id:1,
    name:"John",
    age:32,
},
    {
    id:1,
    name:"John",
    age:32,
},
    {
    id:1,
    name:"John",
    age:32,
},
]

export function generateUser(name:string,age:number):userI{
    return {
        id:Date.now(),
        name,age
    }
}
/* export interface userI{
    id:number,
    name:string,
    age: number
} */