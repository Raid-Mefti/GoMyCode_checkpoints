import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../features/todos/todosSlice";

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(
        task.description
    );
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(editTask({ id: task.id, description: editedDescription }));
        setIsEditing(false);
    };

    return (
        <div className={`task ${task.isDone ? "done" : ""}`}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <span>{task.description}</span>
                    <button onClick={() => dispatch(toggleTask(task.id))}>
                        {task.isDone ? "Undo" : "Done"}
                    </button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default Task;
