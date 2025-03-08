import React, { useState } from "react";

const TaskItem = ({ task, onEditTask, onDeleteTask, onToggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
    const [editedDescription, setEditedDescription] = useState(
        task.description
    );

    const handleSave = () => {
        onEditTask(task.id, editedName, editedDescription);
        setIsEditing(false);
    };

    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDeleteTask(task.id)}>
                        Delete
                    </button>
                    <button onClick={() => onToggleComplete(task.id)}>
                        {task.completed ? "Mark Incomplete" : "Mark Complete"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default TaskItem;
