import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../app/todoSlice';

const TaskInput = memo( () => {

    const [newTask, setNewTask] = useState(``)
    const dispatch = useDispatch()

    const handleNewTask  = (event) => {
        event.preventDefault();
        if (newTask.length == 0){
            alert(`Please enter a task!`);
            return;
        }

        //frontend update

        const newTodo = {
            title : newTask,
            stat : false,
        }
        dispatch(addTodo(newTodo))

        //localStorage update
        let arr = JSON.parse(localStorage.getItem(`quadBTechTodo`))
        arr.push(newTodo);
        let listString = JSON.stringify(arr)
        localStorage.setItem(`quadBTechTodo`, listString)

        setNewTask(``);
    }


    const handleChange = (event) => { setNewTask(event.target.value) }

  return (
    <form>
        <input 
        type='text' value={newTask} placeholder='Add New Task' onChange={handleChange}></input>
        <button type='submit' onClick={handleNewTask}>ADD</button>
    </form>
  )
}) 

export default TaskInput
