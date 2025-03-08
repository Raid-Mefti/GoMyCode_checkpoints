import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, { id: uuidv4(), ...newTask, completed: false }]);
    };

    const editTask = (id, name, description) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, name, description } : task
            )
        );
    };

    const deleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onEditTask={editTask}
                onDeleteTask={deleteTask}
                onToggleComplete={toggleComplete}
            />
        </div>
    );
};

export default App;
