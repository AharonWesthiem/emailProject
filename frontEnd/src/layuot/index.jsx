// import React from 'react'
import Header from '../header'
import Content from '../content'
import Footer from '../footer'
import Login from '../logIn'
// import typeContext from '../context/typeContext'

export default function Layuot() {

  const [token, setToken] = useState("")

  
  return (
    <div className='h-full text-1xl mx-3'>
      <tokenContext.Provider value={ {token}}>
      <Login />
      <Header />
      <Content />
      {/* <Footer/> */}
      </tokenContext.Provider>
    </div>
  )
}
