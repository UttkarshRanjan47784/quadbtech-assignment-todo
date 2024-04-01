import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TodoItem from './TodoItem'
import { overWriteTodo } from '../app/todoSlice'
import { ScrollArea } from './ui/scroll-area'

 const TaskList = memo(() => {
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch()

    // Retrieve the todo list from local storage when the page first loads. Since dependency array is
    // empty, it will only be triggered once. Local storage cannot store arrays hence we convert it to String.
    useEffect(()=> {
      const listString = localStorage.getItem(`quadBTechTodo`);

      // If the list is successfully retrieved
      if (listString != null && listString.length >= 3){ //length of empty array converted to JSON = 2
        let list = JSON.parse(listString);

        // dispatch overWriteTodo with payload to overwrite the initial state.
        dispatch(overWriteTodo({
          list : list
        }));
      }
      // If list was not found in the local Storage. Stringify an empty array and store it in local storage
      else {
        let empty = [];
        let str = JSON.stringify(empty)
        localStorage.setItem(`quadBTechTodo`, str)
      }
    }, [])


    // Iterate over the todolist to generate TodoItem components
    const renderList = todoList.map((item) => {
        return <TodoItem key={`item.title${Math.random()*1000}`} id={`item.title${Math.random()*1000}`} title={item.title} stat={item.stat} />
    })

  return (

    <ScrollArea className='h-[600px] sm:h-[300px] w-full border-2 rounded-lg border-input px-3'>
        {renderList}
    </ScrollArea>
  )
}) 

export default TaskList
