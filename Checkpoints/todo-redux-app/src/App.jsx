import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./features/todos/todosSlice";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.todos.filter);

    return (
        <div className="app">
            <h1>To-Do App</h1>
            <AddTask />
            <div className="filters">
                <button onClick={() => dispatch(setFilter("all"))}>All</button>
                <button onClick={() => dispatch(setFilter("done"))}>
                    Done
                </button>
                <button onClick={() => dispatch(setFilter("notDone"))}>
                    Not Done
                </button>
            </div>
            <ListTask />
        </div>
    );
};

export default App;
