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
                stat : action.payload.stat
            }
            state.todoList.push(newTodo)
        },
        deleteTodo : (state, action) => {
            const toDelete = action.payload.title
            let newArr = state.todoList.filter((item) => {
                return (item.title != toDelete)
            })
            state.todoList = [...newArr]
        },
        updateTodo : (state, action) => {
            const toUpdate = action.payload.title
            state.todoList = state.todoList.map((item) => {
                if (item.title == toUpdate)
                    item.stat = !item.stat
                return item
            })
        },
        overWriteTodo : (state, action) => {
            const arr = action.payload.list
            let x = arr.map((item)=>{
                return {
                    id : nanoid(),
                    title : item.title,
                    stat : item.stat
                }
            });
            state.todoList = [...x];
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, overWriteTodo} = todoSlice.actions

export default todoSlice.reducer