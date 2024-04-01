import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList : []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {
                id : nanoid(),
                title : action.payload.title,
                stat : action.payload.status
            }
            state.todoList.push(newTodo)
        },
        deleteTodo : (state, action) => {
            const toDelete = action.payload.title
            state.todoList = state.todoList.filter((item) => {
                return item.title != toDelete
            })
        },
        updateTodo : (state, action) => {
            const toUpdate = action.payload.title
            state.todoList = state.todoList.map((item) => {
                if (item.title == toUpdate)
                    item.stat = !item.stat
                return item
            })
        }
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer