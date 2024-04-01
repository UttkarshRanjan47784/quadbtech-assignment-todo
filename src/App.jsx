import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Header from './components/Header'

export default function App() {
  return (
    <div className='grid grid-cols-1 gap-10'>
      <Header />
      <div className='sm:w-3/5 md:w-2/5 px-2 grid grid-cols-1 mx-auto gap-10'>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  )
}
