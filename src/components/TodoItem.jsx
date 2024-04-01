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
import { Check, Trash2, Undo2 } from 'lucide-react'

  // memoized component to avoid unnecessary re-renders
 const TodoItem = memo((props) => {

    const dispatch = useDispatch()

    // function to change task state
    const handleUpdate  = () => {

        //frontend update, dispatch updateTodo with payload containing title of the task to be updated.
        dispatch(updateTodo({
            title : props.title
        }))

        //localStorage Update. Local storage cannot store arrays hence we convert it to String.
        let arr = JSON.parse(localStorage.getItem(`quadBTechTodo`))
        let newArr = arr.map((item) => {
            if (item.title == props.title)
                item.stat = !item.stat
            return item
        })
        let listString = JSON.stringify(newArr)
        localStorage.setItem(`quadBTechTodo`, listString)

        // notification
        toast(`Task Status Updated!`)
    }

    // function to delete task
    const handleDelete  = () => {
        //frontend update, dispatch deleteTodo with payload containing title of the task to be deleted.
        dispatch(deleteTodo({
            title : props.title
        }))

        //localStorage Update. Local storage cannot store arrays hence we convert it to String.
        let arr = JSON.parse(localStorage.getItem(`quadBTechTodo`))
        let newArr = arr.filter((item) => {
            return (item.title != props.title)
        })
        let listString = JSON.stringify(newArr)
        localStorage.setItem(`quadBTechTodo`, listString)

        // notification
        toast(`Task Deleted!`)
    }
  // A single task of the todolist
  return (
    <div>
        <Accordion type="single" collapsible>
            <AccordionItem value={props.id}>
                <AccordionTrigger className={props.stat? `opacity-50` : null} style={props.stat ? {textDecoration : "line-through"} : null}>{props.title}</AccordionTrigger>
                <AccordionContent>                    
                    <div className='grid grid-cols-6 gap-2'>
                        <div></div>
                        <div></div>
                        <Button variant={props.stat ? `undo`:`okay`} onClick={handleUpdate} >{props.stat ? (<Undo2 />):(<Check />)}</Button>
                        <Button variant="danger" onClick={handleDelete}><Trash2 /></Button>
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
