import React from 'react'
import { useLocation } from 'react-router-dom'

export default function readMessage() {
  const location = useLocation()
  console.log(location);
  const messageDetails = location.state && location.state.messageDetails;
  return (
    // <div className="bg-gray-100 flex items-center justify-center text-rose-600">
      <div className="bg-rose-50 p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Message</h1>
        {/* <div className="border-t border-rose-300 pt-4"> */}
          <div className="mb-2 border-t border-rose-300 pt-4">
            <span className="font-bold">From:</span> {messageDetails.from}
          </div>
        {/* </div> */}
        {/* <div className=""> */}
          <div className="mb-2 border-t border-rose-300 pt-4">
            <span className="font-bold">To:</span> {messageDetails.to}
          </div>
        {/* </div> */}
        <div className="">
          <div className="mb-2 border-t border-rose-300 pt-4">
            <span className="font-bold">Message:</span>
          </div>
          <div className="p-4 bg-rose-100 border rounded shadow-md ">
            {messageDetails.message}
          </div>
        </div>
      </div>
    // </div>
  );
}
