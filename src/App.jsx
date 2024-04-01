import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Header from './components/Header'
import { Toaster } from './components/ui/sonner'

export default function App() {
  return (
    <div className='h-dvh'>
      <Header />
      <div className='sm:w-3/5 md:w-2/5 px-2 grid grid-cols-1 mx-auto gap-10 mt-14'>
        <TaskInput />
        <TaskList />
      </div>
      <Toaster />
    </div>
  )
}
