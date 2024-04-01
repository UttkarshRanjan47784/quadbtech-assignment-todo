import React from 'react'
import ModeToggle from './ModeToggle'

export default function Header() {
  return (
    <div className='w-full bg-black text-white p-3 flex items-center justify-between border-input'>
      <div>QuadB Tech ToDo List</div>
      <ModeToggle />
    </div>
  )
}
