import React from "react";
import useListManager from "../hooks/useListManager";

type Props<T> = {
    initialItems: T[];
    renderItem(item: T): React.ReactNode;
    generateItem(): T;
};

export default function GenericList<T>({
    initialItems = [],
    renderItem,
    generateItem,
}: Props<T>): React.ReactNode {
    const { itemList, add, remove } = useListManager({ initialItems });

    return (
        <div>
            <h1>Generic List</h1>
            {itemList.map((elem, index) => {
                return (
                    <>
                        {renderItem(elem)}
                        <button
                            onClick={() => {
                                remove(index);
                            }}
                        >
                            delete
                        </button>
                    </>
                );
            })}
            <button
                onClick={() => {
                    add(generateItem());
                }}
            >
                +
            </button>
        </div>
    );
}
