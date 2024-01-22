import axios from 'axios';
import React, { useContext, useState } from 'react';
import tokenContext from '../context/tokenContexst';

export default function NewMessage() {
const [fData, setfData] = useState()
const{token} = useContext(tokenContext)
const handleChange = (e) => {
  console.log(e);
  setfData({
    ...fData, [e.target.name]: e.target.value
  })
  console.log(fData);
}
  const sendMessage = () => {
    console.log(fData);
    try {
      axios.post('http://localhost:2500/email', fData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setfData({})
    } catch (error) {
      console.log(error.message);
    }

  }
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-6/12 p-6 bg-rose-300 rounded-lg">
        <form onSubmit={(e) => e.preventDefault()} >
          <div className="text-2xl font-bold mb-4 text-center">New Message</div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700  ">To:</label>
            <input
              type="text"
              name='to'
              // value={fData.to}
              onChange={handleChange}
              className="w-full h- p-2 border rounded-md focus:outline-none focus:border-rose-500"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name='title'
              // value={fData.title}
              onChange={handleChange}
              className="w-full h-10 p-2 border rounded-md focus:outline-none focus:border-rose-500"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name='message'
              // value={fData.message}
              onChange={handleChange}
              className="w-full h-32 p-2 border rounded-md focus:outline-none focus:border-rose-500 resize-none"
              placeholder="Type your message..."
            />
          </div>

          <button
          onClick={() => sendMessage()}
            className="w-full bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600 focus:outline-none focus:ring focus:border-rose-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


















// import React from 'react'





// export default function NewMessage() {
//   return (
//     <div className=' w-6/12 mt-3 p-2 h-4/5 bg-rose-300 rounded-lg' >
//       <form className=" p-2 "action=""  >
//         <div>new message</div>
//         <input type="text" className='w-full h-6 m rounded-md' placeholder=' email' />
//       <br />
//       <br />

//         <input type="text" className='w-full h-7 rounded-md 'placeholder='title' />
//         <br />
//         <br />
//         <br />
        
        

//         <textarea className='w-full h-full' />

//       </form>
//     </div>
//   )
// }
