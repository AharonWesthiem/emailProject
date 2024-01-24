// import React from 'react'
import Header from '../header'
import Content from '../content'
import Footer from '../footer'
import Login from '../login'
import { useState } from 'react'
import dataContexst from '../context/dataContexst'
import { Route, Router, Routes, json } from 'react-router-dom'
import SignIn from '../signIn'

export default function Layuot() {
  const localStorageItem = localStorage.getItem("data")
  const [data, setData] = useState(localStorageItem? JSON.parse(localStorageItem) : null)


  
  return (<>
  <dataContexst.Provider value={{data, setData}}>
    {data?
    <div className='max-h-full h-full text-1xl mx-3'>
    <Header />
     <Content />
     <Footer/>
     </div>:
     <Routes>
      <Route  index element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/*' element={<Login/>} />
      <Route path='/signIn' element={<SignIn/>} />
     </Routes>
     
     }
  
      </dataContexst.Provider>
    </>
  )
}
