import axios from 'axios'
import React, { useContext, useState } from 'react'
import dataContext from "../context/dataContexst";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate()

  const [fData, setfData] = useState({})
  const {data, setData} = useContext(dataContext)

 const  handleRequestAxios = () => {
    const user = {
      email: fData.email,
      password : fData.password
    }
    axios.post('http://localhost:2500/user/login', user)
    .then(res =>{
      localStorage.setItem("data", JSON.stringify(res.data))
      setData(res.data);
    })
  }

  const handleChange = (e) => {
    setfData({...fData, [e.target.name]: e.target.value})
  }
  
  
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center  text-rose-600">
      <div className="bg-rose-50 p-8 rounded shadow-md w-96 ">
        <h1 className="text-3xl font-bold mb-4 text-center ">Login</h1>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4 co  text-orange-700">
          <div>
            <input
              className="w-full p-2 border rounded-md focus:outline-none   focus:border-rose-500 placeholder-orange-700"
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div>
            <input
              className="w-full p-2 border rounded-md focus:outline-none   focus:border-rose-500 placeholder-orange-700"
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600 focus:outline-none focus:ring focus:border-rose-700"
            onClick={handleRequestAxios}
          >
            log in
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account? <button onClick={() => nav('/signin')} className="text-rose-500">Sign Up</button>
          </p>
      </div>
    </div>
    </div>
  );
}

 
