import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TodoItem from './TodoItem'
import { overWriteTodo } from '../app/todoSlice'
import { ScrollArea } from './ui/scroll-area'

 const TaskList = memo(() => {
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch()


    useEffect(()=> {
      const listString = localStorage.getItem(`quadBTechTodo`);
      if (listString != null && listString.length >= 3){ //length of empty array converted to JSON = 2
        let list = JSON.parse(listString);
        dispatch(overWriteTodo({
          list : list
        }));
      }
      else {
        let empty = [];
        let str = JSON.stringify(empty)
        localStorage.setItem(`quadBTechTodo`, str)
      }
    }, [])

    const renderList = todoList.map((item) => {
        return <TodoItem key={`item.title${Math.random()*1000}`} id={`item.title${Math.random()*1000}`} title={item.title} stat={item.stat} />
    })

  return (

    <ScrollArea className='h-[300px] w-full border-2 rounded-lg border-gray-400 px-3'>
        {renderList}
    </ScrollArea>
  )
}) 

export default TaskList
