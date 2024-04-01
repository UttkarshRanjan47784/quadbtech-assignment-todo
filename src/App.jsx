import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Header from './components/Header'

export default function App() {
  return (
    <div className='mx-5'>
      <Header />
      <TaskInput />
      <TaskList />
    </div>
  )
}
