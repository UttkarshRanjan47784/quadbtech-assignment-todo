import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../app/todoSlice';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

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
        toast(`Task added!`)
    }


    const handleChange = (event) => { setNewTask(event.target.value) }

  return (
    <form className='grid grid-cols-5 gap-2'>
        <Input className='col-span-4 text-center'
        type='text' value={newTask} placeholder='Add New Task' onChange={handleChange} />
        <Button type='submit' onClick={handleNewTask} className='text-xl'>+</Button>
    </form>
  )
}) 

export default TaskInput
