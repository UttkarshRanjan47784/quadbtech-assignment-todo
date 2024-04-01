import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TodoItem from './TodoItem'
import { overWriteTodo } from '../app/todoSlice'

export default function TodoList() {
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
        return <TodoItem key={`item.title${Math.random()*1000}`} title={item.title} stat={item.stat} />
    })

  return (
    <div>
        {renderList}
    </div>
  )
}
