import { createSlice } from "@reduxjs/toolkit";

const loadedTodoCart =
    JSON.parse(localStorage.getItem("todoCart") || "null") || [];
//const allCarts = [];
function saveTodo(todos) {
    localStorage.setItem("todoCart", JSON.stringify(todos));
}
export const todoSlice = createSlice({
    name: "todoCart",
    initialState: { todos: loadedTodoCart },
    reducers: {
        addTodo: (state, action) => {
            /* 
{
id: Date.now(),
completion:false,
text:e.target.value            
}            
            */
            const newTodoCart = action.payload;
            if (newTodoCart) {
                state.todos.push(newTodoCart);
            }
            saveTodo(state.todos);
        },
        removeTodo: (state, action) => {
            const todo = action.payload;
            if (todo) {
                const index = state.todos.findIndex((t) => t.id === todo.id);
                if (index === -1) return;
                state.todos.splice(index, 1);
            }
            saveTodo(state.todos);
        },

        toggleCompletion: (state, action) => {
            const todo = action.payload;
            if (todo) {
                const index = state.todos.findIndex((t) => t.id === todo.id);
                if (index === -1) return;
                state.todos[index].completion = true;
            }
            saveTodo(state.todos);
        },
    },
});
export const { newTodoCart } = todoSlice.actions;
export default todoSlice.reducer;
