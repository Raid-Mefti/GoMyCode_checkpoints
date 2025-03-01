import React, { useState } from 'react'
import { ListManager } from '../types/listManager';

interface Props<T> {initialItems:T[]}

export default function useListManager<T>({initialItems}: Props<T>): ListManager<T> {
    const [itemList, setItemList] = useState(initialItems);
    
    return{
        itemList,
        add(item){
            setItemList((p)=>[...p, item])
        },
        remove(index){
            setItemList((p)=> p.filter((_,i)=>i!==index))
        }
    }
}








/* import React, { useState } from 'react'
import { ListManager } from '../types/listManager';

type Props<T> = {
    initialItems:T[]
}



export default function useListManager<T>({initialItems}: Props<T>):ListManager<T> {
    const [itemList, setItemList] = useState(initialItems);

return{
    itemList,
    add(item){
        setItemList(p=>([...p,item]))
    },
     remove(index){
        setItemList(p=>p.filter((_,i)=>i!==index))
     }

}
} */