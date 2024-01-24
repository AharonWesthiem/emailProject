import React from 'react'
import Search from '../search'
import User from '../user'

export default function Header() {
  return (
    <>
    <header className=' w-full h-1/6 flex justify-between m-3'>
      <User/>
      <Search/>
      <p className='mr-9'>logo</p>
    
    </header>
    </>
  )
    
}
