import React, { useState } from 'react'
import Nav from '../nav'
// import Mails from '../mails'
import AllMails from '../allMalis'
import { Route, Routes } from 'react-router-dom'

import NewMessage from '../newMessage'
import ReadMessage from '../readMessage'
import SignIn from '../signIn'


export default function Content() {
  return (<>
    <div className='w-full h-full flex' >
      
      <Nav />

      <div className='w-10/12 flex justify-center ml-2 bg-rose-50	rounded-md'>
        <Routes>
<<<<<<< HEAD
          {/* <Route index element={<AllMails />} /> */}
          <Route path='/:type' element={<AllMails />} />
          <Route path='/new' element={<NewMessage />} />
          <Route path='/message/' element={<ReadMessage />} />
=======
          <Route index element={<AllMails />} />
          <Route path='/:type' element={<AllMails />}/>
          <Route path='/new' element={<NewMessage />}/>
          <Route path='/message/' element={<ReadMessage/>}/>
>>>>>>> a8e896865afa8f76f417261f5690b2bd2638610f
        </Routes>
        {/* <Mails/> */}
      </div>
    </div>
  </>
  )
}
