import React from 'react'

export default function Search() {

  return (
    <div className='m-auto w-full text-center'>
        <label htmlFor="search">Search</label>
        <input  type="text" className='bg-slate-200 grow w-8/12 p-2 m-2 rounded-full'/>
    </div>
  )
}
