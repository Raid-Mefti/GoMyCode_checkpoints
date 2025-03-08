import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todos/todosSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask(description));
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;