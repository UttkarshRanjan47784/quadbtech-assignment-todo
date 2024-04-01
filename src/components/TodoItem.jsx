import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTodo, updateTodo } from '../app/todoSlice'

 const TodoItem = memo((props) => {

    const dispatch = useDispatch()

    const handleUpdate  = () => {
        //frontend update
        dispatch(updateTodo({
            title : props.title
        }))

        //localStorage Update
        let arr = JSON.parse(localStorage.getItem(`quadBTechTodo`))
        let newArr = arr.map((item) => {
            if (item.title == props.title)
                item.stat = !item.stat
            return item
        })
        let listString = JSON.stringify(newArr)
        localStorage.setItem(`quadBTechTodo`, listString)
    }

    const handleDelete  = () => {
        dispatch(deleteTodo({
            title : props.title
        }))

        //localStorage Update
        let arr = JSON.parse(localStorage.getItem(`quadBTechTodo`))
        let newArr = arr.filter((item) => {
            return (item.title != props.title)
        })
        let listString = JSON.stringify(newArr)
        localStorage.setItem(`quadBTechTodo`, listString)
    }

  return (
    <div>
        <div style={props.stat ? {textDecoration : "line-through"} : null}>{props.title}</div>
        <button onClick={handleUpdate}>DONE</button>
        <button onClick={handleDelete}>DELETE</button>
    </div>
  )
})

export default TodoItem 