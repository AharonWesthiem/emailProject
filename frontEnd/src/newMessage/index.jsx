import React from 'react'

export default function NewMessage() {
  return (
    <div className=' w-6/12 mt-3 p-2 h-4/5 bg-rose-300 rounded-lg' >
      <form className=" p-2 "action=""  >
        <div>new message</div>
        <input type="text" className='w-full h-6 m rounded-md' placeholder=' email' />
      <br />
      <br />

        <input type="text" className='w-full h-7 rounded-md 'placeholder='title' />
        <br />
        <br />
        <br />
        
        

        <textarea className='w-full h-full' />

      </form>
    </div>
  )
}
