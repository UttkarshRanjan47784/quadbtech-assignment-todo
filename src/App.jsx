import React from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'

export default function App() {
  return (
    <div className='mx-5'>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  )
}
