import React from 'react'
import AllMails from '../allMalis'
import { Route, Routes } from 'react-router-dom'

import NewMessage from '../newMessage'
import ReadMessage from '../readMessage'

export default function mails() {
  return (
  <div className='w-full h-auto  bg-rose-50	rounded-md'>
    <Routes>
        <Route path='/:type' element={<AllMails />}/>
        <Route path='/new' element={<NewMessage/>}/>
        <Route path='/message/' element={<ReadMessage/>}/>
  </Routes>
  </div>
  )
}
