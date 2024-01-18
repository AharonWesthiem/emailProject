import axios from 'axios';
import React, { useState } from 'react'

export default function SignIn() {
 
    const [fData, setfData] = useState({})

    const handleChange = (e) => {
        setfData({ ...fData, [e.target.name]: e.target.value });
      };

      const  handleRequestAxios = () => {
        const user = {
          firstName: fData.firstName,
          lastName: fData.lastName,  
          email: fData.email,
          password : fData.password
        }
        axios.post('http://localhost:2500/user/signup', user)
        .then(res =>{
          res.data
          
        })
        .catch(error => {
          console.error('Error', error)
        })
      }
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center text-rose-600">
          <div className="bg-rose-50 p-8 rounded shadow-md w-96">
            <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4 text-orange-700">
              <div>
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-rose-500 placeholder-orange-700"
                  type="text"
                  onChange={handleChange}
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-rose-500 placeholder-orange-700"
                  type="text"
                  onChange={handleChange}
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-rose-500 placeholder-orange-700"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
              </div>
              <div>
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-rose-500 placeholder-orange-700"
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
                Sign Up
              </button>
            </form>
          </div>
        </div>
      );
    };
