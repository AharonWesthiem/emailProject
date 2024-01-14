import React from 'react'
import Search from '../search'
import User from '../user'

export default function Header() {
  return (
    <>
    <header className=' w-full h-24 flex justify-between  '>
     
      <User/>
      <Search/>
      <p>logo</p>
    
    </header>
    </>
  )
    
}
