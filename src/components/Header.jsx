import React from 'react'
import ModeToggle from './ModeToggle'

export default function Header() {
  return (
    // Header for the App
    <div className='w-full bg-black text-white p-3 flex items-center justify-between border-input'>
      <div>QuadB Tech ToDo List</div>
      {/* Theme Toggler */}
      <ModeToggle />
    </div>
  )
}
