import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid provides a unique id each time it is called. It is a part of the redux toolkit

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
            state.todoList.push(newTodo) // Simply append the new task to tlist of existing tasks
        },
        deleteTodo : (state, action) => {
            const toDelete = action.payload.title

            // filter out the task that had to deleted.
            let newArr = state.todoList.filter((item) => {
                return (item.title != toDelete)
            })
            // separate indirect way of setting the state. Done for demonstration purpose only.
            state.todoList = [...newArr]
        },
        updateTodo : (state, action) => {
            const toUpdate = action.payload.title
            // Iterate over the todolist and update the state of task which matches the title.
            // direct way of setting the state.
            state.todoList = state.todoList.map((item) => {
                if (item.title == toUpdate)
                    item.stat = !item.stat // change state
                return item
            })
        },

        // this is used in useEffect hook
        overWriteTodo : (state, action) => {
            const arr = action.payload.list
            // Iterate over the list to create the task object array
            let x = arr.map((item)=>{
                return {
                    id : nanoid(),
                    title : item.title,
                    stat : item.stat
                }
            });
            state.todoList = [...x]; //set state to the generated array
        }
    }
})

//exporting all the reducers for easy access (import) in components
export const {addTodo, deleteTodo, updateTodo, overWriteTodo} = todoSlice.actions

export default todoSlice.reducer