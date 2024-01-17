import React from 'react'
import Nav from '../nav'
// import Mails from '../mails'
import AllMails from '../allMalis'
import { Route, Routes } from 'react-router-dom'

import NewMessage from '../newMessage'
import ReadMessage from '../readMessage'

export default function Content() {
  return (<>
    <div className='w-full h-full flex' >
      <Nav />

      <div className='w-10/12 flex justify-center ml-2 bg-rose-50	rounded-md'>
        <Routes>
          <Route index element={<AllMails />} />
          <Route path='/:type' element={<AllMails />} />
          <Route path='/new' element={<NewMessage />} />
          <Route path='/message/' element={<ReadMessage />} />
        </Routes>

        {/* <Mails/> */}
      </div>
    </div>
  </>
  )
}