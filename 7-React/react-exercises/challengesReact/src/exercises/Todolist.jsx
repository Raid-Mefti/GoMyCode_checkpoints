import { useState } from "react";

export default function Todolist() {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState([]);

    return (
        <>
            <div className="FLEX">
                <input
                    type="text"
                    className="border"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.currentTarget.value);
                    }}
                />
                <button
                    className="btn"
                    onClick={() => {
                        setTodo([...todo, inputValue]);
                    }}
                >
                    Add
                </button>
            </div>

            <div className="flex flex-col">
                {todo.map((t, i) => {
                    return (
                        <ul className="FLEX" key={t}>
                            <li className="list-disc">{t}</li>
                            <button
                                className="btn"
                                onClick={() => {
                                    const newTodo = [...todo];
                                    newTodo.splice(i, 1);
                                    setTodo(newTodo);
                                }}
                            >
                                X
                            </button>
                        </ul>
                    );
                })}
            </div>
        </>
    );
}
