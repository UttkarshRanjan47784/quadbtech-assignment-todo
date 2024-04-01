import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTodo, updateTodo } from '../app/todoSlice'
import { Button } from './ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from './ui/accordion'
import { toast } from 'sonner'

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
        toast(`Task Status Updated!`)
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
        toast(`Task Deleted!`)
    }

  return (
    <div>
        <Accordion type="single" collapsible>
            <AccordionItem value={props.id}>
                <AccordionTrigger style={props.stat ? {textDecoration : "line-through"} : null}>{props.title}</AccordionTrigger>
                <AccordionContent>                    
                    <div className='grid grid-cols-6 gap-2'>
                        <div></div>
                        <div></div>
                        <Button variant="okay" onClick={handleUpdate} >{props.stat ? `UNDO`:`DONE`}</Button>
                        <Button variant="danger" onClick={handleDelete}>DELETE</Button>
                        <div></div>
                        <div></div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
})

export default TodoItem 