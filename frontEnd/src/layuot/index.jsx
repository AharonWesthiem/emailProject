// import React from 'react'
import Header from '../header'
import Content from '../content'
import Footer from '../footer'
import Login from '../login'
import { useState } from 'react'
import tokenContexst from '../context/tokenContexst'
import { Route, Router, Routes, json } from 'react-router-dom'
import SignIn from '../signIn'

export default function Layuot() {

  const [token, setToken] = useState()


  
  return (<>
  <tokenContexst.Provider value={ {token, setToken}}>
    {token?
    <div className='h-full text-1xl mx-3'>

    <Header />
     <Content />
     <Footer/>
     </div>:
     <Routes>
      <Route  index element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signIn' element={<SignIn/>} />
     </Routes>
     
     }
  
      </tokenContexst.Provider>
    </>
  )
}
