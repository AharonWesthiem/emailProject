import React from 'react'
import Search from '../search'
import User from '../user'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const nav =useNavigate()
  return (
    <>
    <header className=' w-full h-1/6 flex justify-between m-3'>
      <User/>
      <Search/>
      <p className='mr-9 self-center' onClick={()=>{
        localStorage.removeItem('data')
        nav("/login")
      }}>logOut</p>
    
    </header>
    </>
  )
    
}
