import React, { useState } from 'react'
import { UseDispatch, useDispatch } from 'react-redux';
import { addTodo } from '../app/todoSlice';

export default function TodoForm() {

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
            stat : false
        }

        dispatch(addTodo(newTodo))

        //localStorage update

        setNewTask(``);
    }

  return (
    <form>
        <input type='text' value={newTask} placeholder='Add New Task'></input>
        <button type='submit' onClick={handleNewTask}>ADD</button>
    </form>
  )
}
