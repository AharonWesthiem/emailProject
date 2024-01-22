import React, { useContext } from 'react'
import tokenContext from '../context/tokenContexst'

export default function User() {
  const {token} = useContext(tokenContext)
  
  return (
  <>
  <div className='flex  '>
    
    
    <img  className=' bg-slate-600 h-20 w-20 rounded-full my-auto 'src='.' alt="" />
        <div className='m-3 my-auto'>
            <p>name</p>
            <p> email</p>
        </div>
    </div>
 </> 
 )
}
