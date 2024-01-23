import React, { useContext } from 'react'
import dataContext from '../context/dataContexst'

export default function User() {
  const {data}= useContext(dataContext)
  console.log(data.email);
  return (
  <>
  <div className='flex  '>
    
    
    <img  className=' bg-slate-600 h-20 w-20 rounded-full my-auto 'src='.' alt="" />
        <div className='m-3 my-auto'>
            <p>{data.firstName}</p>
            <p> {data.email} </p>
        </div>
    </div>
 </> 
 )
}
