

export interface ListManager<T> {
    itemList:T[],
    add(item:T):void,
    remove(index:number):void,
}

