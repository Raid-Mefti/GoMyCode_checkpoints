import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim() || !taskDescription.trim()) {
            setError("Both fields are required!");
            return;
        }
        onAddTask({ name: taskName, description: taskDescription });
        setTaskName("");
        setTaskDescription("");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
