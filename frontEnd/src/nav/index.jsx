import React from 'react'

export default function Nav() {
  return (
    <>
    <nav>
        <ul className='flex-row p-2 w-36 '>
        <li className='p-2 shadow-md bg-rose-50'> New email</li>
            <li className='p-2 shadow-md bg-rose-50'>Inbox</li>
            <li className='p-2 shadow-red-100 bg-rose-50'>Outbox</li>
            <li className='p-2 shadow-md bg-rose-50'>Garbage</li>
            <li className='p-2 shadow-md bg-rose-50'>unread</li>
        </ul>
    </nav>
    </>
  )
}
