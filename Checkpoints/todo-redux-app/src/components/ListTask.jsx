import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
    const tasks = useSelector((state) => state.todos.tasks);
    const filter = useSelector((state) => state.todos.filter);

    const filteredTasks = tasks.filter((task) => {
        if (filter === "done") return task.isDone;
        if (filter === "notDone") return !task.isDone;
        return true; // "all"
    });

    return (
        <div className="task-list">
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
